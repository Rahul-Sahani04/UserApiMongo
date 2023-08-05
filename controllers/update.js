const User = require('../models/User')

const updateUser = async (request, response) => {
    const id = request.params.id;
    const { firstName, lastName, email, age, password } = request.body;

    try {
        const user = await User.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    first_name: firstName,
                    last_name: lastName,
                    age: Number(age),
                    email: email,
                    password: password
                },
            },
            { new: true } 
        );

        if (!user) {
            return response.send({status: 404, message: "User not found." });
        }

        response.send({status: 200, message: "User updated successfully.", user });
    } catch (error) {
        console.error(error);
        response.send({status: 500, error: 'Internal Server Error' });
    }
};

module.exports = { updateUser };