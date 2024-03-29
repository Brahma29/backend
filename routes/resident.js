import express from 'express';
import { register, getAllResidents, getResidentById, updateResidentById, deleteResidentById, login } from '../controllers/residentController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(register).get(authenticateToken, getAllResidents);
router.post('/login', login);
router.route('/:id').get(authenticateToken, getResidentById).put(authenticateToken, updateResidentById).delete(authenticateToken, deleteResidentById);

export default router;
