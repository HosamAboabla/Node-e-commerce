const router = require('express').Router();


const userRoutes = require('./userAPI')



router.use('/user' , userRoutes);


module.exports = router;