const User = require('../models/User')

const deleteUser = async (request, response) => {
    const { id } = request.params_id;

    if (!id) {
        return response.send({ status: 400, message: "User ID is required for deletion." });
    }

    try {
        // Find the user by their email and delete them
        const user = await User.findOneAndDelete({ _id: id });

        if (!user) {
            return response.send({ status: 404, message: "User not found." });
        }

        response.send({ status: 200, message: "User deleted successfully." });
    } catch (error) {
        response.send({ status: 500, error: 'Internal Server Error' });
    }
};


module.exports = {
    deleteUser,
};
