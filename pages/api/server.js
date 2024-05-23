const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.get('/api/product', (req, res) => {
    pool.query('SELECT sku_id, product_name, price, quantity_available, category_id, image_url FROM products', (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: 'Error fetching products' });
        }
        res.json(results);
    });
});

module.exports = router;