const express = require('express');
const router = express.Router();
const Users = require('../../models/user.js');
const Cart = require('../../models/cart.js');
const cryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken");
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')

function creatJWToken(id,isAdmin) {
    return jwt.sign({
        id: id,
        isAdmin : isAdmin},
        process.env.jwt_sec,
        {expiresIn:process.env.jwt_token_life}
    )
}

function errorHandller(err) {
    console.log("message" , err.message, err.code)
    let errors = {}
    if (err.message.includes("User validation failed"))
    {
        Object.values(err.errors).forEach(({properties}) => {
            console.log(properties)
            errors[properties.path] = properties.message
        })
    }
    if (err.message === "invalid password") {
        errors.password = "This password is invalid"
    }
    if (err.message === 'invalid user name') {
        errors.userName = "This user name is invalid"
    }
    if (err.message.includes("duplicate key")) {
        errors.duplicate = err.message
    }

    return errors
}

router.post('/register' , async(request,responce) => {
    try{            
            const newUser = await Users.create({
                userName: request.body.userName,
                email: request.body.email,
                firstName: request.body.firstName,
                lastName : request.body.lastName,
                phoneNumber: request.body.phone,
                password : request.body.password && cryptoJS.AES.encrypt(request.body.password,process.env.password_sec).toString(),
                // address : request.body.address
        });
            const newCart = new Cart({user : newUser._id});
            console.log(newUser._id)
            await newCart.save()
        // creating access token
        const accessToken = creatJWToken(newUser._id,newUser.isAdmin)
        responce.cookie('jwt', accessToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 2})
        responce.status(201).json({Message : `new user was created:`,Data: {}})
    } catch(err) {
        // console.log("Errors :" , err);
        errors = errorHandller(err)
        // console.log(errors)
        // console.log("there was error in register")
        responce.status(500).json({Message: 'There was an ERROR creating the user',Error: errors})
    }
})

router.post('/login' , async(request,responce) => {
    try{
        const user = await Users.findOne({email: request.body.email})
        if (!user){
        responce.status(401).json({UserError : 'Invalid email'})
        }else {
        const hashedPassword = cryptoJS.AES.decrypt(user.password,process.env.password_sec)
        const unHashed = hashedPassword.toString(cryptoJS.enc.Utf8)
        if (unHashed !== request.body.password){
        responce.status(401).json({passwordError : 'Invalid password'})
        }else {
        const {password, ...others} = user._doc
        // creating access token
        const accessToken = creatJWToken(user._id,user.isAdmin)
        responce.cookie('jwt', accessToken, {httpOnly: true, maxAge:1000 * 60 * 60 * 24 * 2})
        responce.status(200).json({Message : "success", Data: {...others,accessToken }})
    }}
    } catch(err) {
        errors = errorHandller(err)
        responce.status(500).json({Message: 'There was an ERROR logging in',Error: errors})
    }
})

router.get('/logout',(request,responce) => {
    responce.cookie("jwt",'',{maxAge : 1})
    responce.redirect("/")
})

router.get('/verifyUser', verify, (request,responce) => {
    responce.status(200)
})
router.get('/verifyAdmin', verifyAndAdmin, (request,responce) => {
    responce.status(200)
})
module.exports = router;
