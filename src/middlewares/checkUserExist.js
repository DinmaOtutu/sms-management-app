import Users from '../models/Users';

const checkUserExist = async (req, res, next) => {
  const { phoneNumber } = req.body;
  const phoneExist = await Users.findOne({ phoneNumber });
  if (phoneExist) return res.status(400).json({ error: 'Phone number already exist' });
  next();
};

export default checkUserExist;
