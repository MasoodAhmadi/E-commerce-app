require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const userModel = require('../models/user');
const isEmail = require('validator/lib/isEmail');

//Getting all data
router.get('/', async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
});

//create user
router.post('/', async (req, res) => {
  const { email, username, password } = req.body;
  if (!isEmail(email)) return res.status(401).send('Invalid Email');

  try {
    let user;
    user = await userModel.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(401).send('User already registered');
    }

    user = new userModel({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
    });
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    const token = jwt.sign(
      {
        email: user.email,
        username: user.username,
        password: user.password,
      },
      process.env.SECRETKEY,
      {
        expiresIn: '10h',
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
module.exports = router;
