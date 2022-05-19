const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema(
    {
        cartItems: [
            {product_id: {
                type: Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number}
        ],
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