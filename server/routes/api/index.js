const router = require('express').Router();


const userRoutes = require('./userAPI')
const productRoutes = require('./productAPI')
const CartRoutes = require('./cartAPI')
const OrderRoutes = require('./orderAPI')


router.use('/orders' , OrderRoutes);
router.use('/carts' , CartRoutes);
router.use('/products' , productRoutes);
router.use('/users' , userRoutes);


module.exports = router;