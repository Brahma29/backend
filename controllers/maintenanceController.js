import Maintenance from '../models/Maintenance.js';

// Create a new maintenance task
export const createMaintenanceTask = async (req, res) => {
    try {
        const maintenanceData = req.body;
        const maintenanceTask = await Maintenance.create(maintenanceData);
        res.status(201).json({ success: true, data: maintenanceTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all maintenance tasks
export const getAllMaintenanceTasks = async (req, res) => {
    try {
        const maintenanceTasks = await Maintenance.find();
        res.status(200).json({ success: true, data: maintenanceTasks });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get maintenance task by ID
export const getMaintenanceTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const maintenanceTask = await Maintenance.findById(id);
        if (!maintenanceTask) {
            return res.status(404).json({ success: false, message: 'Maintenance task not found' });
        }
        res.status(200).json({ success: true, data: maintenanceTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update maintenance task by ID
export const updateMaintenanceTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMaintenanceTask = await Maintenance.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMaintenanceTask) {
            return res.status(404).json({ success: false, message: 'Maintenance task not found' });
        }
        res.status(200).json({ success: true, data: updatedMaintenanceTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete maintenance task by ID
export const deleteMaintenanceTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMaintenanceTask = await Maintenance.findByIdAndDelete(id);
        if (!deletedMaintenanceTask) {
            return res.status(404).json({ success: false, message: 'Maintenance task not found' });
        }
        res.status(200).json({ success: true, message: 'Maintenance task deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
