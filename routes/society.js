import express from 'express';
import { register, getAllSocieties, getSocietyById, updateSocietyById, deleteSocietyById } from '../controllers/societyController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(register).get(authenticateToken, getAllSocieties);
router.route('/:id').get(authenticateToken, getSocietyById).put(authenticateToken, updateSocietyById).delete(authenticateToken, deleteSocietyById);

export default router;
