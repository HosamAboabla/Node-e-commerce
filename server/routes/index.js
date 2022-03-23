const router = require('express').Router();

const apiRoutes = require('./api');

const API_BASE_URL = '/api';

router.use(API_BASE_URL , apiRoutes);
router.use(API_BASE_URL , (req , res) => {
    res.status(404).json('No API route found!');
});

module.exports = router;