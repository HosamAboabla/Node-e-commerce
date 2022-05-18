const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        products: [
            {product_id: {
                type: Schema.Types.ObjectId,
                ref: 'product'
            },
            productPrice: Number,
            quantity: Number}
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        total: {
            type: Number,
            default: 0
        },address :{ 
            type : {
            street : String,
            city : String,
            country : String},
            required: true
        },status : {
            type : String ,
            default : 'Pending ',
            enum : ["Pending", "Shipped","Delivered","Cancelled"]}
    },
    { timestamps: true }
);

module.exports = mongoose.model('order', OrderSchema);