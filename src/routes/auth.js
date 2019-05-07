import { Router } from 'express';
import AuthController from '../controllers/AuthenticationController';
import checkUserExist from '../middlewares/checkUserExist';
import verifyInputs from '../middlewares/verifyInputs';

const router = Router();

router.post('/newUser', verifyInputs.createUserRequestBody, checkUserExist, AuthController.newUser);

export default router;
