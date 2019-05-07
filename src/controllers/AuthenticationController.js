import BaseRepository from '../repositories/BaseRepository';
import Users from '../models/Users';
// create a user, login, update, delete account, get a user

/**
 * @description UserController
 */
class AuthController {
/**
 * @description creates a new user
 * @param  {object} req
 * @param {object} res
 * @returns {object} a newly created user
 * @memberof AuthController
 */
  static async newUser(req, res) {
    try {
      const {
        firstName, lastName, phoneNumber, password
      } = req.body;
      const options = {
        firstName, lastName, phoneNumber, password
      };
      const newUser = await BaseRepository.create(Users, options);
      if (newUser) {
        const payload = {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          phoneNumber: newUser.phoneNumber,
          id: newUser._id,
        };
        const token = newUser.generateToken(payload);
        return res.status(201).json({
          message: 'User successfully created',
          token
        });
      }
    } catch (error) {
      return res.status(500).json({
        error: 'failed to create a user',
      });
    }
  }
}

export default AuthController;