const express = require('express');
const router = express.Router();
const Cart = require('../../models/cart.js');
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')



router.get('/list' , verify , async (req , res) => {
    const carts = await Cart.find({user : req.user.id}).populate("cartItems")
    const last = carts // await last.cartItems[0].populate("product")
    // console.log('cart: ' , last.user.userName );

    res.status(200).json({
        Message : "success",
        Data : carts
    });
});





module.exports = router;