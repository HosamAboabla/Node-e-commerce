const express = require('express');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const router = express.Router();

const jwt_secret  = keys.jwt 

// Middleware to authenticate users
const authenticateToken = (req , res , next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null ) return res.sendStatus(401);

    jwt.verify(token , jwt_secret.secret , (err , user) => {
        if(err)
        {
            console.log('error' , err);
            return res.sendStatus(403);
        } 
        req.user = user;
    })
    next();
}



router.get('/hosam' , authenticateToken , (req , res) => {
    const user = req.user;
    res.json(`hello ${user.name}`);
})

router.post('/login' , async (req , res) => {
    const {username , password} = req.body
    const user = { name: username};

    // Check user authentication first

    const accessToken = jwt.sign(user , jwt_secret.secret , {expiresIn : jwt_secret.tokenLife});

    res.json({ accessToken })

})



module.exports = router;