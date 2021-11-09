var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = password => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword);

const generateAccessToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    username: user.username,
    roles: user.roles
  },
    process.env.TOKEN_SECRET,
    { expiresIn: '3d' });
  return token;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateAccessToken,
};
