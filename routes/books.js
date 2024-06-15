const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Create a new book
router.post('/', (req, res) => {
    const book = req.body;
    const query = 'INSERT INTO books SET ?';
    db.query(query, book, (err, result) => {
        if (err) throw err;
        res.send('Book added');
    });
});

// Retrieve all books
router.get('/', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update a book
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const book = req.body;
    const query = 'UPDATE books SET ? WHERE id = ?';
    db.query(query, [book, id], (err, result) => {
        if (err) throw err;
        res.send('Book updated');
    });
});

// Delete a book
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM books WHERE id = ?';
    db.query(query, id, (err, result) => {
        if (err) throw err;
        res.send('Book deleted');
    });
});

module.exports = router;
