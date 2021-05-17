const { Router } = require("express");

const authMiddleware = require("../auth/middleware");
const adminMiddleware = require("../auth/adminAuth");

const { user, tour } = require("../models");

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
    res.status(200).send(tourById);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
  const { title, description, cafes, district, time } = req.body;
  if (!title || !description || !cafes || !district || !time) {
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
      time,
    });
    res
      .status(200)
      .send({ message: "You succesfully created the new tour", newTour });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.delete("/:tourid", authMiddleware, adminMiddleware, async (req, res) => {
  const { tourid } = req.params;

  //   if (!title || !description || !cafes || !district || !time) {
  //     return res
  //       .status(400)
  //       .send({ message: "Information provided is incomplete or wrong" });
  //   }
  try {
    const deletedTour = await tour.destroy({ where: { id: tourid } });
    res
      .status(200)
      .send({ message: "You succesfully deleted the tour", deletedTour });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
