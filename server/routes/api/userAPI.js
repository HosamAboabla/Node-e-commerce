const express = require('express');
const router = express.Router();
const Users = require('../../models/user.js');

router.use(express.json())

// get all users
router.get('/list' , async (request , responce) => {
    try{
        const userList = await Users.find();
        responce.status(200).json(userList);
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }
})

// get user with id 
router.get('/list/:id' , async (request,responce) => {
    try{
        const user = await Users.findById(request.params.id);
        responce.status(200).json(user);
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the user data with ID :${request.params.id}`,Error:err});
    }
})

router.post('/create' , async(request,responce) => {
    try{
        const item = {
            email: request.body.email,
            firstName: request.body.firstName,
            lastName : request.body.lastName,
            PhoneNumber: request.body.PhoneNumber,
            isAdmin : request.body.isAdmin,
            password : request.body.password,
        }
        const newUser = new Users(item);
        await newUser.save()
        responce.status(201).send(`new user was created: ${newUser}`)
    } catch(err) {
        responce.status(500).json({Message: 'There was an ERROR creating the user',Error: err})
    }

})


router.put('/update/:id' , async (request,responce) => {
    try{
        const updated = await Users.updateOne(
            {_id : request.params.id},
             { $set: {
                email: request.body.email,
                firstName: request.body.firstName,
                lastName : request.body.lastName,
                PhoneNumber: request.body.PhoneNumber,
                isAdmin : request.body.isAdmin,
                password : request.body.password,}});
        await updated.save()
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the user data with ID : ${request.params.id}`,Error:err});
    }
})

router.delete('/delete/:id', async (request,responce) => {
    try{
        const removed = await Users.deleteOne({_id : request.params.id});
        responce.status(200).json(removed);
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message: "The user hasn't been deleted",Error: err})
    }
})


module.exports = router