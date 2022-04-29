const express = require('express');
const router = express.Router();

const { verify } = require('../verifyToken');
const Cart = require('../../models/cart');
const cartItem = require('../../models/cartItem');
const Products = require('../../models/product');
const Users = require('../../models/user');
const cart = require('../../models/cart');


router.get('/list' , verify , async (req , res) => {
    const user = req.user;
    // 6269e9a21b8683f6f03f70a1
    const cart = await Cart.findOne({user: user.id , status :"active"}).populate("cartItems");
    console.log(cart.cartItems)
    res.status(200).json({
        Message : "success",
        Data : cart.cartItems
    });
});


router.post('/create' , verify , async (req , res) => {
    const user = req.user;
    
    // create cartItem
    const newCartItem = await cartItem.create({
        product: req.body.product_id,
        quantity : req.body.quantity
    })

    let cart = await Cart.findOne({
        user : user.id,
        status : 'active'
    })
    if(cart)
    {
        // Get current of user if exists
        console.log('found active cart');
        console.log('cart items :' , [...cart.cartItems , newCartItem._id])
        cart.cartItems = [...cart.cartItems , newCartItem._id];
        
        cart.save();
    }else{
        // else create new cart
        console.log('creating new cart...')
        cart = await Cart.create({
            user : user.id,
            cartItems : [newCartItem._id]
        })

    }
    res.status(200).json({
        Message : "created successfully",
        Data: await Cart.findOne({user: user.id , status :"active"}).populate("cartItems")
    });

})


router.put('/update' , verify , async (req , res) => {

    const user = req.user;

    // find current cart
    let cart = await Cart.findOne({user: user.id , status :"active"}).populate("cartItems");
    if(!cart){
        res.status(500).json("no cart found")
    }

    // find the cart items using product id
    cart.cartItems.map(cartItem => {
        if(cartItem.product == req.body.product_id)
        {
            if(req.body.quantity <= 0)
            {
                cartItem.delete();
            }else{
                cartItem.quantity = req.body.quantity;
                cartItem.save()
            }
        }
    })
    // udpate quantity
    res.status(200).json({
        Message : "updated successfully",
        Data: await Cart.findOne({user: user.id , status :"active"}).populate("cartItems")
    })
})

module.exports = router