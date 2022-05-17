const express = require('express');
const router = express.Router();
const Cart = require('../../models/cart.js');
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')


// get cart with user id 
router.get('/user',verify, async (request , responce) => {
    try{
        userid = request.user._id
        const userCart = await  Cart.find().where('user').equals(userid);
        responce.status(200).json(userCart);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }

})



router.put('/update', verify, async(request,responce) => {
    try{
        userid = request.user._id
        updated = Cart.updateOne({_id : userid},
        {$set :{
            cartItems : request.body.cartItems
        }})
        responce.status(201).send(`the cart updated: ${updated}`)
    } catch(err) {
        responce.status(500).json({Message: 'There was an ERROR updating the cart',Error: err})
    }

})




module.exports = router;