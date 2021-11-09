var express = require('express');
var router = express.Router();


router.get('/test/all', (req, res) => {
    res.status(200).send('Public Content.');
});

router.get('/test/user', (req, res) => {
    res.status(200).send('User Content.');
});

router.get('/test/admin', (req, res) => {
    res.status(200).send('Admin Content.');
});

router.get('/test/mod', (req, res) => {
    res.status(200).send('Moderator Content.');
});

module.exports = router;

