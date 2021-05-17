const user = require("../models").user;

async function adminMiddleware(req, res, next) {
  const user = req.user;

  try {
    user.isAdmin
      ? next()
      : res.status(401).send({ message: "Unauthorized access" });
  } catch (error) {
    console.log("ERROR IN ADMIN MIDDLEWARE", error);
  }
}

module.exports = adminMiddleware;
