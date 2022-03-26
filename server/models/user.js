const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        firstName: {
            type: String,
            requied: true
        },
        lastName: {
            type: String,
            requied: true
        },
        phoneNumber: {
            type: String,
            requied: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: [true, 'Please enter a valid password'],
            minlength: [6, 'Minimum password length must be 6 characters']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('user', userSchema);