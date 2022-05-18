const express = require('express');
const router = express.Router();
const Users = require('../../models/user.js');
const cryptoJS = require("crypto-js")
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

// get user with id for admins only
router.get('/list/:id',verifyAndAdmin , async (request,responce) => {
    try{
        const user = await Users.findById(request.params.id);
        responce.status(200).json(user);
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the user data with ID :${request.params.id}`,Error:err});
    }
})
// get user 
router.get('/listUser',verify , async (request,responce) => {
    try{
        const id = request.user.id
        const user = await Users.findById(id);
        responce.status(200).json(user);
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the user data with ID :${request.params.id}`,Error:err});
    }
})

router.put('/update',verify , async (request,responce) => {
    try{
        if (request.body.password) {
            request.body.password = cryptoJS.AES.encrypt(
                request.body.password,
                process.env.password_sec)
                .toString()}
        const id = request.user.id
        const updated = await Users.updateOne(
            {_id : id},
             { $set: {
                userName: request.body.userName,
                email: request.body.email,
                firstName: request.body.firstName,
                lastName : request.body.lastName,
                PhoneNumber: request.body.PhoneNumber,
                isAdmin : request.body.isAdmin,
                password : request.body.password}});
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the user data with ID : ${request.params.id}`,Error:err});
    }
})

router.delete('/delete',verifyAndAuthorization, async (request,responce) => {
    try{
        const id = request.user.id
        const removed = await Users.deleteOne({_id : id});
        responce.status(200).json(removed);
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message: "The user hasn't been deleted",Error: err})
    }
})


module.exports = router