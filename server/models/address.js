const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        address: {
            type: String
        },
        city: String,
        state: String,
        country: String,
        isDefault: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Address', AddressSchema);