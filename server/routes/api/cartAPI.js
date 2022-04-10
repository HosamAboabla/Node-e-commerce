const express = require('express');

const router = express.Router();

const Cart = require('../../models/cart.js');

router.use(express.json())

// get all users
router.get('/list' , (request , responce) => {
    console.log(`this is what in the cart ${Cart}`);
    Users.find().then((user) =>{
        responce.send(user)
    }).catch(responce.send('There was an error fetching the data'))

})