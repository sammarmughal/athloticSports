const express = require('express');
const mysql = require('mysql');
const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'athloticsports',
    database: 'athlotic_sports'
}); 

app.get('/api/products', (req, res) => {
    pool.query('SELECT * FROM products', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error fetching products' });
        }
        res.json(results);
    });
});
