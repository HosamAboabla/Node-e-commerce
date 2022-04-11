const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema
const CartItemSchema = require('./cartItem').schema
const CartSchema = new Schema(
    {
        products: [CartItemSchema],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            unique: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', CartSchema);