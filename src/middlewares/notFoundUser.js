import Users from '../models/Users';

const notFound = async (req, res, next) => {
  const { phoneNumber } = req.body;
  const userExist = await Users.findOne({ phoneNumber });
  if (!userExist) return res.status(404).json({ error: 'User not found' });
  next();
};

export default notFound;
