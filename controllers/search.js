const User = require('../models/User');

const searchUser = (request, response) => {
  const { id, firstName, lastName, email, password } = request.query;

  if (id) {
    User.find({ _id: id })
      .then((user) => {
        if (!user) {
          return response.send({ message: "User not found.", status: 404 });
        }
        response.send({ status: 200, user });
      })
      .catch((error) => {
        response.send({ status: 500, message: "Internal server error.", error: error });
      });
  } else if (firstName) {
    User.find({ first_name: firstName })
      .then((users) => {
        if (users.length === 0) {
          return response.send({ status: 404, message: "User not found." });
        }
        response.send({ status: 200, users });
      })
      .catch((error) => {
        response.send({ status: 500, message: "Internal server error." });
      });
  } else if (lastName) {
    User.find({ last_name: lastName })
      .then((users) => {
        if (users.length === 0) {
          return response.send({ status: 404, message: "User not found." });
        }
        response.send({ status: 200, users });
      })
      .catch((error) => {
        response.send({ status: 500, message: "Internal server error." });
      });
  } else if (email) {
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          return response.send({ status: 404, message: "User not found." });
        }
        response.send({ status: 200, exists: true });
      })
      .catch((error) => {
        response.send({ status: 500, message: "Internal server error." });
      });
  } else {
    response.send({ status: 400, message: "No Parameters Provided." });
  }
};

module.exports = {
  searchUser,
};
