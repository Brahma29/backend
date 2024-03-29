import express from 'express';
import { register, getAllComplaints, getComplaintById, updateComplaintById, deleteComplaintById } from '../controllers/complaintController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(authenticateToken, register).get(authenticateToken, getAllComplaints);
router.route('/:id').get(authenticateToken, getComplaintById).put(authenticateToken, updateComplaintById).delete(authenticateToken, deleteComplaintById);

export default router;
