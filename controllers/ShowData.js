// const User = require('../models/User')

const getUsers = (request, response) => {
  try {
    const users = User.find(); // Perform a query to fetch all users from MongoDB
    response.send({ status: 200, users: "USERS" });
  } catch (error) {
    response.send({ status: 500, error: 'Internal Server Error' });
  }

}

module.exports = {
  getUsers,
}