const User = require('../models/User');

const authUser = async (request, response) => {
    try {
        const { email, password } = request.body;
        if (email && password) {
            User.findOne({ email: email, password: password })
                .then((user) => {
                    if (!user) {
                        return response.send({ status: 404, message: "Invalid credentials" });
                    }
                    response.send({ status: 200, user });
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
                    response.send({ status: 200, user: user});
                })
                .catch((error) => {
                    response.send({ status: 500, message: "Internal server error." });
                });
        } else {
            response.send({ status: 400, message: "No Parameters Provided." });
        }
    } catch (error) {
        // response.status(500).json({ error: error.message });
        response.send({ status: 500, error: error.message });
    }
};

module.exports = {
    authUser,
};
