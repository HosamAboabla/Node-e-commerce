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
        quantity: {
            type:Number,
            min : 0
        },
        price:{
            type:Number,
            min : 0
        },
        size: String,
        color: String
    });

module.exports = mongoose.model('product', productSchema);