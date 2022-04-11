const mongoose = require('mongoose');
const CartItemSchema = require('./cartItem').schema;

const Schema = mongoose.Schema;
const CartSchema = new Schema(
    {
        products: [CartItemSchema],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', CartSchema);