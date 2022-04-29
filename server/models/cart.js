const mongoose = require('mongoose');

const CartItemSchema = require('./cartItem').schema;

const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        cartItems: [
            {
                type: Schema.Types.ObjectId,
                ref: 'cartItem'
            }
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            unique: true
        },
        status: {
            type: String,
            default: 'active',
            enum: ['active', 'closed']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('cart', CartSchema);