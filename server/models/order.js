const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'cart'
        },
        status: {
            type: String,
            default: 'Not processed',
            enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('order', OrderSchema);