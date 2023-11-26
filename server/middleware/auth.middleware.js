const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token)
    return res
      .status(401)
      .send({ message: 'ACCESS DENIED: No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded;
    next();
  } catch ({ message }) {
    res.status(400).send({ message: 'NOT A VALID TOKEN' });
  }
}
module.exports = { verifyToken };
