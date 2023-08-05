const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is Required']
    },
    last_name: {
        type: String,
        default: '<NAME>' // Default value if not provided in input data
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
    },
}, { timestamps: true });

// Create a user model
const User = mongoose.model('UserData', userSchema);

module.exports = User;
