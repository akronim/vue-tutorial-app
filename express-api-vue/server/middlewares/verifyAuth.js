var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const bearer = authHeader.split(' ');
  const token = bearer[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, authorizedData) => {
    if (err) return res.sendStatus(403);

    req.user = authorizedData;

    next();
  });
};

module.exports = authenticateJWT;

