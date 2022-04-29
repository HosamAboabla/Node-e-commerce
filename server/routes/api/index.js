const router = require('express').Router();


const userRoutes = require('./userAPI')
const productRoutes = require('./productAPI')
const CartRoutes = require('./cartAPI')
const OrderRoutes = require('./orderAPI')
const cartItems = require('./cartItemAPI')
const auth = require('./auth')

router.use('/auth', auth)
router.use('/orders' , OrderRoutes);
router.use('/carts' , CartRoutes);
router.use('/cartItems' , cartItems);
router.use('/products' , productRoutes);
router.use('/users' , userRoutes);
// router.use('/' , auth);


module.exports = router;