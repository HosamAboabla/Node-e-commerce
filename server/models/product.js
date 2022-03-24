const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        image: String,
        quantity: Number,
        price: Number,
        size: String,
        color: String
    });

module.exports = mongoose.model('product', productSchema);