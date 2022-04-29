const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        quantity: Number
    });

module.exports = mongoose.model('cartItem', CartItemSchema);
