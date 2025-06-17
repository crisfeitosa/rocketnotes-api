import multer from 'multer';
import { Router } from 'express';

import uploadConfig from '../configs/upload.js';
import UsersController from '../controllers/UsersController.js';
import UserAvatarController from '../controllers/UserAvatarController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js';

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export default usersRoutes;