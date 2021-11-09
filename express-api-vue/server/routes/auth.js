var express = require('express');
var router = express.Router();
var db = require('../db.json');
var { comparePassword, generateAccessToken } = require('../utils/auth.js')


router.post('/auth/login', (req, res) => {
    let accessToken = null;

    const { username, password } = req.body;

    console.log(username + ' ' + password)

    let ok = false;

    if (username && password) {
        const user = db.users.find((x) => x.username === username);
        
        if (user) {
            if (comparePassword(user.password, password)) {
                ok = true;
                accessToken = generateAccessToken(user);
                res.status(200).json({
                    accessToken,
                    ...user, // TODO remove password
                });
            }
        }
    }

    if (!ok) {
        res.status(403);
        res.json({
            message: 'wrong login information'
        });
    }
});

router.post('/auth/logout', (req, res) => {
    // TODO
});


router.post('/auth/register', (req, res) => {
    const { firstName, lastName, phone, email, username, password } = req.body;
    // TODO
    console.log(username + ' ' + password + ' ' + email);
});


module.exports = router;

