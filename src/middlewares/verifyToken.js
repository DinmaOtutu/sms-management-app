import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) return res.status(403).json({ error: 'Kindly sign in' });
  const token = bearerHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
    if (err) return res.status(403).json({ error: 'Kindly sign in' });
    req.authData = authData;
    next();
  });
};

export default verifyToken;