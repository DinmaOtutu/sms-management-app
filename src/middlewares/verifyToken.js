import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const bearerHeader = res.headers.authorization;
  if (!bearerHeader) {
    return res.status(403).json({
      error: 'Please kindly sign in'
    });
  }
  const token = bearerHeader.split('')[1];
  jwt.verify(token, process.env.JWT_SECRET, (error, authData) => {
    if (error) {
      return res.status(403).json({
        error: 'Please kindly sign in'
      });
    }
    req.authData = authData;
    next();
  });
};

export default verifyToken;
