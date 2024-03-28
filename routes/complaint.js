import express from 'express';
import { register, getAllComplaints, getComplaintById, updateComplaintById, deleteComplaintById } from '../controllers/complaintController.js';

const router = express.Router();

router.route('/').post(register).get(getAllComplaints);
router.route('/:id').get(getComplaintById).put(updateComplaintById).delete(deleteComplaintById);

export default router;
