const express = require('express');

const router = express.Router();

const Users = require('../../models/user.js');

router.use(express.json())

// get all users
router.get('/' , (request , responce) => {
    console.log(`this is what in the database ${Users}`);
    Users.find().then((user) =>{
        responce.send(user)
    }).catch(responce.send('There was an error fetching the data'))

})

// get user with id 
router.get('/:id' , (request,responce) => {
    const user = Users.find((user) => user.id === parseInt(request.params.id))
    if (!user) return responce.status(404).send('The user with the given ID was not found')
    responce.send(user)
})

// creat new user
router.post('/' , (request,responce) => {
    try{
        const item = {
            email: request.body.email,
            firstName: request.body.firstName,
            lastName : request.body.lastName,
            PhoneNumber: request.body.PhoneNumber,
            isAdmin : request.body.isAdmin,
            password : request.body.password,
            timestamps : request.body.timestamps
        }
        const newUser = new Users(item);
        newUser.save()
        responce.send(`new user was created: ${newUser}`)
    } catch(err) {
        responce.status(400).send(`There was an error: ${err}`)
    }

})



router.put('/:id' , (request,responce) => {
    const user = Users.find((user) => user.id === parseInt(request.params.id))
    if (!user) return responce.status(404).send('The user with the given ID was not found')

    // if invalid return 400 - bad request
    user.email= request.body.email
    user.firstName = request.body.firstName
    user.lastName  = request.body.lastName
    user.PhoneNumber = request.body.PhoneNumber
    user.isAdmin  = request.body.isAdmin
    user.password  = request.body.password
    user.timestamps  = request.body.timestamps
    responce.send(user);
    
})

router.delete('/:id', (request,responce) => {
    const user = Users.find((user) => user.id === parseInt(request.params.id))
    if (!user) return responce.status(404).send('The user with the given ID was not found')
    // depend on how the database store the data supossed => list of objects
    const index = Users.indexOf(user);
    Users.splice(index,1);
    responce.send(user)
})


module.exports = router;