require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/auth/signin', (req, res) => {
  const USERNAME = 'test';
  const PASSWORD = 'test';

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: 'test',
      username: 'test',
      email: 'test@test.com'
    };
    const accessToken = jwt.sign(user, process.env.JWT_KEY);

    res.json({
      accessToken,
      ...user,
      roles: ['ROLE_ADMIN', 'ROLE_MODERATOR']
    });
  } else {
    res.status(403);
    res.json({
      message: 'wrong login information'
    });
  }
});

app.post('/api/auth/signup', (req, res) => {
  const { username, password, email } = req.body;
  console.log(username + ' ' + password + ' ' + email);
});

app.get('/api/test/all', (req, res) => {
  res.status(200).send('Public Content.');
});

app.get('/api/test/user', (req, res) => {
  res.status(200).send('User Content.');
});

app.get('/api/test/admin', (req, res) => {
  res.status(200).send('Admin Content.');
});

app.get('/api/test/mod', (req, res) => {
  res.status(200).send('Moderator Content.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
