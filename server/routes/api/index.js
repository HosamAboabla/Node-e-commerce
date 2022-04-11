const router = require('express').Router();


const userRoutes = require('./userAPI')
const productRoutes = require('./productAPI')
const CartRoutes = require('./cartAPI')
const OrderRoutes = require('./orderAPI')


router.use('/order' , OrderRoutes);
router.use('/cart' , CartRoutes);
router.use('/product' , productRoutes);
router.use('/user' , userRoutes);


module.exports = router;