import { Router } from 'express';
import AuthController from '../controllers/AuthenticationController';
import checkUserExist from '../middlewares/checkUserExist';
import verifyInputs from '../middlewares/verifyInputs';
import notFoundUser from '../middlewares/notFoundUser';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/newUser', verifyInputs.createUserRequestBody, checkUserExist, AuthController.newUser);
router.post('/login', verifyInputs.loginRequestBody, notFoundUser, AuthController.login);
router.delete('/deleteAccount', verifyToken, AuthController.deleteAccount);
router.get('/:id', verifyToken, verifyInputs.getUserRequestBody, AuthController.getUser);

export default router;
