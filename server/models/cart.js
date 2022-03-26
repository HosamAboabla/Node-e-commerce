const mongoose = require('mongoose');
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