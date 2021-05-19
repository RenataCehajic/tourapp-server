const { Router } = require("express");

const authMiddleware = require("../auth/middleware");
const adminMiddleware = require("../auth/adminAuth");

const { user, tour, enrollment } = require("../models");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const tours = await tour.findAll({
      include: [user],
    });
    res.status(200).send(tours);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.get("/:tourid", async (req, res) => {
  try {
    const { tourid } = req.params;
    const tourById = await tour.findByPk(parseInt(tourid), {
      include: [user],
    });
    const enrollments = await enrollment.findAll({ where: { tourId: tourid } });
    res.status(200).send({ tourById, enrollments });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/:tourid", authMiddleware, async (req, res) => {
  try {
    const { tourid } = req.params;
    const userLoggedIn = req.user;

    console.log("this is user", userLoggedIn);
    console.log("this is tourid", tourid);
    const newTour = await enrollment.create({
      userId: userLoggedIn.dataValues.id,
      tourId: tourid,
    });
    res
      .status(200)
      .send({ message: "You successfully enrolled to the tour!", newTour });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  const { title, description, cafes, district, date, imageUrl } = req.body;
  if (!title || !description || !cafes || !district || !date || !imageUrl) {
    return res
      .status(400)
      .send({ message: "Information provided is incomplete or wrong" });
  }
  try {
    const newTour = await tour.create({
      title,
      description,
      cafes,
      district,
      date,
      imageUrl,
    });
    res
      .status(200)
      .send({ message: "You succesfully created the new tour", newTour });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.patch("/:tourid", async (req, res) => {
  const { tourid } = req.params;

  const tourLike = await tour.findByPk(parseInt(tourid));
  if (!tourLike) {
    return res.status(400).send("Tour does not exist");
  }
  const updatedTour = await tourLike.increment({
    rate: 1,
  });
  res.status(200).send(updatedTour);
});

router.delete("/:tourid", authMiddleware, adminMiddleware, async (req, res) => {
  const { tourid } = req.params;

  try {
    const deletedTour = await tour.destroy({ where: { id: tourid } });

    res.status(200).send({
      message: "You succesfully deleted the tour",
      deletedTour,
    });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
