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
        responce.status(400).json({Message:'There was an error fetching the data',Error:err});
    }
})

// get user with id 
router.get('/list/:id' , async (request,responce) => {
    try{
        // console.log("this is userse: ",Users,request.params.id)
        const user = await Users.findById(request.params.id);
        // console.log('ussssssssssssssssser',user)
        // if (!user) return responce.status(404).send('The user with the given ID was not found')
        responce.status(200).json(user);
    }
    catch(err){
        responce.status(400).json({Message:'There was an error fetching the data',Error:err});
    }
})

// create new user
router.post('/create' , async(request,responce) => {
    try{
        const item = {
            email: request.body.email,
            firstName: request.body.firstName,
            lastName : request.body.lastName,
            PhoneNumber: request.body.PhoneNumber,
            isAdmin : request.body.isAdmin,
            password : request.body.password,
            // timestamps : request.body.timestamps
        }
        // console.log(request.body)  // for dubugging
        const newUser = new Users(item);
        await newUser.save()
        responce.status(200).send(`new user was created: ${newUser}`)
    } catch(err) {
        responce.status(400).json({ErrorMessage: err})
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
        responce.json(updated)
    }catch(err){
        responce.status(400).json({Message:'There was an error Updating the data',Error:err});
    }

    // responce.status(404).send('The user with the given ID was not found')
})

router.delete('/delete/:id', async (request,responce) => {
    try{
        const removed = await Users.remove({_id : request.params.id});
        responce.json(removed);
    }catch(err){
        responce.status(400).json({Message: "The user hasn't been deleted",Error: err})
    }
})


module.exports = router