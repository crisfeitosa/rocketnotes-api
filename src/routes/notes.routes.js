import { Router } from 'express';
import NotesController from '../controllers/NotesController.js';

const notesRoutes = Router();
const notesController = new NotesController();

notesRoutes.post('/:user_id', notesController.create);

export default notesRoutes;