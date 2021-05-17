const { enrollment, user, tour } = require("./models");

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array

    const allUsers = await user.findAll({
      include: [tour],
    });
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));
