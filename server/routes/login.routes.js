const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');

//get all user
router.get('/', async (req, res) => {
  const user = await userModel.findOne(req.user?._id);
  if (!user) return res.status(404).json({ message: "User doesn't exist" });
  res
    .status(200)
    .send({ id: user._id, email: user.email, username: user.username });
});

//login
router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel
    .findOne({ email: email?.toLowerCase() })
    .select('+password');

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const isPassword = await bcrypt.hash(password, 10);

  if (!isPassword) {
    return res.status(401).send('invalid credential');
  }

  const token = jwt.sign(
    { id: user.id, username: user.email, password: user.password },
    process.env.SECRETKEY,
    {
      expiresIn: '1h',
    }
  );

  res.json({ token });
});

module.exports = router;
