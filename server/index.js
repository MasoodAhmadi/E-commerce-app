const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const secretKey = 'masoodsecretkey';

app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

//login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, password: user.password },
    secretKey,
    {
      expiresIn: '1h',
    }
  );

  res.json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  const decoded = jwt.verify(token, secretKey);
  req.user = decoded;
  next();
};

app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
