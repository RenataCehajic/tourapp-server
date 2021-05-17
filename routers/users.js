const { Router } = require("express");

const { user, tour } = require("../models");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await user.findAll({
      include: [tour],
    });
    res.status(200).send(users);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

module.exports = router;
