import express from 'express';
import { createMaintenanceTask, getAllMaintenanceTasks, getMaintenanceTaskById, updateMaintenanceTaskById, deleteMaintenanceTaskById } from '../controllers/maintenanceController.js';

const router = express.Router();

router.route('/').post(createMaintenanceTask).get(getAllMaintenanceTasks);
router.route('/:id').get(getMaintenanceTaskById).put(updateMaintenanceTaskById).delete(deleteMaintenanceTaskById);

export default router;
