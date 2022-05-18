const express = require('express');
const router = express.Router();
const Orders = require('../../models/order.js');
const { verify, verifyAndAuthorization, verifyAndAdmin } = require('../verifyToken')


router.get('/allOrders',verifyAndAdmin, async (req, res) => {
    try {
        const userOrder = await Orders.find().sort(-1);
        res.status(200).json(userOrder);
    } catch (err) {
        res.status(500).json({ Message: 'there was an ERROR ', ERROR: err });
    }
})
router.get('/user',verify, async (req, res) => {
    try {
        const id = req.user.id
        const userOrder = await Orders.find().where('user').equals(id);
        res.status(200).json(userOrder);
    } catch (err) {
        res.status(500).json({ Message: 'there was an ERROR ', ERROR: err });
    }
})

router.get('/user/:orderId',verify, async (req, res) => {
    try {
        const id = req.user.id
        const userOrder = await Orders.findOne({_id :req.params.orderId, user : id});
        res.status(200).json(userOrder);
    } catch (err) {
        res.status(500).json({ Message: 'there was an ERROR ', ERROR: err });
    }
})


router.post('/create',verify, async (req, res) => {
    try {
        const newOrder = new Orders({
            user: req.user.id,
            products: req.body.products,
            total: req.body.total,
            address : req.body.address,
            status : req.body.status
        });
        await newOrder.save();
        res.status(201).send(`new order is created:  ${newOrder}`);
    } catch (err) {
        res.status(500).json({ Message: 'There was an ERROR', Error: err });
    }
})


router.delete('/delete/:id', verifyAndAdmin, async (req, res) => {
    try {
        const removed = await Orders.deleteOne({ _id: req.params.id ,user : req.user.id});
        res.status(200).json(removed);
    } catch (err) {
        res.status(500).json({ Message: "The product hasn't been deleted", Error: err });
    }
})



module.exports = router;