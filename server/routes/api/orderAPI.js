const express = require('express');
const router = express.Router();

const Orders = require('../../models/order.js');

router.use(express.json())


module.exports = router;