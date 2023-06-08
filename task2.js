// Task 2: Express.js Route
const express = require('express');
const router = express.Router();
const Product = require('./models/Product');

router.get('/products', (req, res) => {
  Product.find({}, 'name price', (err, products) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(products);
    }
  });
});

module.exports = router;
