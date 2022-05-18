const express = require('express');
const router = express.Router();
const Cart = require('../../models/cart.js');
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')

// The cart is created when the user register


// get cart with user id 
router.get('/user',verify, async (request , responce) => {
    try{
<<<<<<< HEAD
        userid = request.user.id
=======
        const userid = request.user.id
>>>>>>> 7785a340610652f341a5d39e2a61cb189d5f05da
        const userCart = await  Cart.findOne().where('user').equals(userid);
        responce.status(200).json(userCart);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }

})

// Updating the cart
router.put('/update', verify, async(request,responce) => {
    try{
<<<<<<< HEAD
        userid = request.user.id
=======
        const userid = request.user.id
>>>>>>> 7785a340610652f341a5d39e2a61cb189d5f05da
        const updated = await Cart.updateOne({user : userid},
        {$set :{
            cartItems : request.body.cartItems
        }});
        responce.status(201).json({Message : `the cart has been updated: ${updated}}`})
    } catch(err) {
        responce.status(500).json({Message: 'There was an ERROR updating the cart',Error: err})
    }

})




module.exports = router;