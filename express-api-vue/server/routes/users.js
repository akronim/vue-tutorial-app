var express = require('express');
var router = express.Router();
const shortid = require('shortid');
var db = require('../db.json');
var authenticateJWT = require('../middlewares/verifyAuth.js')
var { hashPassword } = require('../utils/auth.js')


router.get(`/users`, authenticateJWT, (req, res) => {
  const users = db.users;
  // TODO remove password
  res.status(200).send(users);
});

router.post(`/users`, (req, res) => {
  if (req.body) {
    const { firstName, lastName, phone, email, username, password } = req.body;
    const id = shortid.generate();

    const hashedPassword = hashPassword(password);

    db.users.push({
      id,
      firstName,
      lastName,
      phone,
      email,
      username,
      password: hashedPassword,
      roles: ["ROLE_USER"]
    });

    const user = db.users.find((x) => x.id === id);
    // TODO remove password
    res.status(201).send(user);
  } else {
    res.status(400).send("Error");
  }
})

router.put(`/users`, (req, res) => {
  if (req.body) {
    const { id, firstName, lastName, phone, email } = req.body;

    const user = db.users.find((x) => x.id === id);
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.email = email;
    user.username = user.username;
    user.roles = user.roles;
    user.password = user.password;
    // TODO remove password
    res.status(200).send(user);
  } else {
    res.status(400).send("Error");
  }
});

router.delete(`/users/:id`, (req, res) => {
  if (req.params.id) {
    const { id } = req.params;

    const users = db.users.filter((x) => x.id !== id);

    db.users = users;

    res.status(204).send({ success: true });
  } else {
    res.status(400).send("Error");
  }
})

module.exports = router;

