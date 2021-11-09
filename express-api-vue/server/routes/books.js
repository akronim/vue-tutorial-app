var express = require('express');
var router = express.Router();
const shortid = require('shortid');
var db = require('../db.json');
var authenticateJWT = require('../middlewares/verifyAuth.js')


router.get('/books', authenticateJWT, function (req, res) {
    const books = db.books;
    res.send(books);
});

router.get('/books/:id', authenticateJWT, (req, res) => {
    const id = req.params.id;

    // searching books for the id
    for (let book of db.books) {
        if (book.id === id) {
            res.json(book);
            return;
        }
    }

    res.status(404).send('Book not found');
});

router.post('/books', authenticateJWT, function (req, res) {
    if (req.body) {
        const {
            title,
            author,
            publishDate,
            publisher,
            numOfPages,
        } = req.body;

        const id = shortid.generate();


        db.books.push({ id, title, author, publishDate, publisher, numOfPages })
        const book = db.books.find((x) => x.id === id);
        res.status(201).send(book);
    } else {
        res.status(400).send("Error");
    }
});

router.put(`/books`, authenticateJWT, (req, res) => {
    if (req.body) {
        const {
            id,
            title,
            author,
            publishDate,
            publisher,
            numOfPages,
        } = req.body;


        const book = db.books.find((x) => x.id === id);
        book.title = title;
        book.author = author;
        book.publishDate = publishDate;
        book.publisher = publisher;
        book.numOfPages = numOfPages;

        res.status(202).send(book);
    } else {
        res.status(400).send("Error");
    }
});

router.delete('/books/:id', authenticateJWT, function (req, res) {
    if (req.params.id) {
        const { id } = req.params;

        var books = db.books.filter((x) => x.id !== id);
        db.books = books;

        res.status(204).send({ success: true })
    } else {
        res.status(400).send("Error");
    }
});

module.exports = router;