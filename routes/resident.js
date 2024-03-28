import express from 'express';
import { register, getAllResidents, getResidentById, updateResidentById, deleteResidentById } from '../controllers/residentController.js';

const router = express.Router();

router.route('/').post(register).get(getAllResidents);
router.route('/:id').get(getResidentById).put(updateResidentById).delete(deleteResidentById);

export default router;
