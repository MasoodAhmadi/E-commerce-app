require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const docnnectDB = require('./utils/connectDB');
docnnectDB();

//get all user
app.use('/api/user/users', require('./routes/user.routes'));

//signup user
app.use('/api/user/signup', require('./routes/user.routes'));

//get token verificatin
app.use(`/api/auth/token`, require('./routes/login.routes'));

//get single user
app.use('/api/auth/user', require('./routes/login.routes'));

//login user
app.use(`/api/auth/login`, require('./routes/login.routes'));

// Start the server
const port = 3001;
const server = app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
module.exports = server;
