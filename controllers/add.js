const User = require('../models/User');

const addUsers = async (request, response) => {
    const { firstName, lastName, email, age, password } = request.body;

    if (!firstName || !lastName || !email || !age || !password) {
        // return response.status(400).json({ message: "All fields are required." });
        return response.send({ message: "All fields are required." });
    }
    try {
        const users = await User.create({
            first_name :  firstName,
            last_name   :  lastName,
            email       :  email,
            age         : Number(age),
            password    : password
        }); 
        // response.status(200).json({message: users});
        response.send({status: 200, message: users});
    } catch (error) {
        // response.status(500).json({ error: error.message });
        response.send({status: 500, error: error.message });
    }
};

module.exports = {
    addUsers,
};
