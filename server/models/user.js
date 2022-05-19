const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, 'Please enter the user name'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        firstName: {
            type: String,
            requied: [true, 'Please enter the first name']
        },
        lastName: {
            type: String,
            requied: [true, "Please enter the last name"]
        },
        phoneNumber: {
            type: String,
            requied: true
        },
        address :{ 
            type : {
            street : String,
            city : String,
            country : String},
            required: true
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