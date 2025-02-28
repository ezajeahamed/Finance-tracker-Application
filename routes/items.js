const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Import your Mongoose model

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
