const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
    {
        address: {
            type: String
        },
        city: String,
        country: String,
        isDefault: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Address', AddressSchema);