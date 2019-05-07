import { Router } from 'express';
import AuthController from '../controllers/AuthenticationController';
import checkUserExist from '../middlewares/checkUserExist';
import verifyInputs from '../middlewares/verifyInputs';
import notFoundUser from '../middlewares/notFoundUser';

const router = Router();

router.post('/newUser', verifyInputs.createUserRequestBody, checkUserExist, AuthController.newUser);
router.post('/login', verifyInputs.loginRequestBody, notFoundUser, AuthController.login);

export default router;
