const express = require('express');

const router = express.Router();

const Cart = require('../../models/cart.js');


// get cart with user id 
router.get('/user/:userid' , async (request , responce) => {
    try{
        const userCart = await  Cart.find().where('user').equals(request.body.userid);
        responce.status(200).json(userCart);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }

})

// get cart with cart id 
router.get('/:id' , async (request , responce) => {
    try{
        const userCart = await  Cart.findById(request.body.id);
        responce.status(200).json(userCart);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }

})

router.post('/create' , async(request,responce) => {
    try{
        const newCart = new Cart({user : request.body.user});
        await newCart.save()
        responce.status(201).send(`new user was created: ${newCart}`)
    } catch(err) {
        responce.status(500).json({Message: 'There was an ERROR creating the user',Error: err})
    }

})



module.exports = router;