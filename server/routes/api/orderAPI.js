const express = require('express');
const router = express.Router();
const Orders = require('../../models/order.js');
const { verify, verifyAndAuthorization, verifyAndAdmin } = require('../verifyToken')


router.get('/user/:id', async (req, res) => {
    try {
        const userOrder = await Orders.find().where('user').equals(req.params.id);
        res.status(200).json(userOrder);
    } catch (err) {
        res.status(500).json({ Message: 'there was an ERROR ', ERROR: err });
    }
})


router.post('/create', async (req, res) => {
    try {
        const newOrder = new Orders({
            cart: req.body.cart,
            user: req.body.user,
            total: req.body.total
        });
        await newOrder.save();
        res.status(201).send(`new order is created:  ${newOrder}`);
    } catch (err) {
        res.status(500).json({ Message: 'There was an ERROR', Error: err });
    }
})


router.delete('/delete/:id', verifyAndAdmin, async (req, res) => {
    try {
        const removed = await Orders.deleteOne({ _id: req.params.id });
        res.status(200).json(removed);
    } catch (err) {
        res.status(500).json({ Message: "The product hasn't been deleted", Error: err });
    }
})



module.exports = router;