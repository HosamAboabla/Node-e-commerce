const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        quantity: Number,
        status: {
            type: String,
            default: 'Not processed',
            enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
        }
    });

module.exports = mongoose.model('cartItem', CartItemSchema);
