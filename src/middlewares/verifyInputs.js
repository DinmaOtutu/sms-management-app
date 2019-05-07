import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  createUserRequestBody: (req, res, next) => {
    req.check('firstName', 'first name is required').trim().notEmpty();
    req.check('lastName', ' last name is required').trim().notEmpty();
    req.check('phoneNumber', ' phone number is required').trim().notEmpty();
    req.check('password', ' password is required').trim().notEmpty();
    req.check('phoneNumber', 'phone number should be a number').isInt();

    errorValidationHandler(req, res, next);
  },

  loginRequestBody: (req, res, next) => {
    req.check('phoneNumber', ' phone number is required').trim().notEmpty();
    req.check('password', ' password is required').trim().notEmpty();
    req.check('phoneNumber', 'phone number should be a number').isInt();

    errorValidationHandler(req, res, next);
  },

  getUserRequestBody: (req, res, next) => {
    req.check('id', ' ID is invalid').isMongoId();
    req.check('id', ' ID is required').trim().notEmpty();


    errorValidationHandler(req, res, next);
  },
};
export default verifyUserInput;