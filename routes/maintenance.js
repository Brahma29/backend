import express from 'express';
import { createMaintenanceTask, getAllMaintenanceTasks, getMaintenanceTaskById, updateMaintenanceTaskById, deleteMaintenanceTaskById } from '../controllers/maintenanceController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(authenticateToken, createMaintenanceTask).get(authenticateToken, getAllMaintenanceTasks);
router.route('/:id').get(authenticateToken, getMaintenanceTaskById).put(authenticateToken, updateMaintenanceTaskById).delete(authenticateToken, deleteMaintenanceTaskById);

export default router;
