const express = require('express');
const router = express.Router();
const Users = require('../../models/user.js');
const Cart = require('../../models/cart.js');
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')

// get all users
router.get('/list',verifyAndAdmin , async (request , responce) => {
    try{
        const userList = await Users.find();
        responce.status(200).json(userList);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }
})

// get user with id 
router.get('/list/:id',verifyAndAuthorization , async (request,responce) => {
    try{
        const user = await Users.findById(request.params.id);
        responce.status(200).json(user);
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the user data with ID :${request.params.id}`,Error:err});
    }
})

router.put('/update',verify , async (request,responce) => {
    try{
        id = request.user._id
        const updated = await Users.updateOne(
            {_id : id},
             { $set: {
                email: request.body.email,
                firstName: request.body.firstName,
                lastName : request.body.lastName,
                PhoneNumber: request.body.PhoneNumber,
                isAdmin : request.body.isAdmin,
                password : request.body.password,}});
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the user data with ID : ${request.params.id}`,Error:err});
    }
})

router.delete('/delete/:id',verifyAndAuthorization, async (request,responce) => {
    try{
        const removed = await Users.deleteOne({_id : request.params.id});
        responce.status(200).json(removed);
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message: "The user hasn't been deleted",Error: err})
    }
})


module.exports = router