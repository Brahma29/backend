import express from 'express';
import { register, getAllSocieties, getSocietyById, updateSocietyById, deleteSocietyById } from '../controllers/societyController.js';

const router = express.Router();

router.route('/').post(register).get(getAllSocieties);
router.route('/:id').get(getSocietyById).put(updateSocietyById).delete(deleteSocietyById);

export default router;
