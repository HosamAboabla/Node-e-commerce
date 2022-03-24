const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'cart'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        total: {
            type: Number,
            default: 0
        },
        updated: Date,
        created: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('order', OrderSchema);