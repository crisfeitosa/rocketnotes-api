import multer from 'multer';
import { Router } from 'express';

import uploadConfig from '../configs/upload.js';
import UsersController from '../controllers/UsersController.js';
import ensureAuthenticated from '../middlewares/ensureAuthenticated.js';

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), (req, res) => {
  console.log(req.file.filename);
  return res.json({ file: req.file.filename });
})

export default usersRoutes;