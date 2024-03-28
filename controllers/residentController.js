import Resident from '../models/Resident.js';

// Register a new resident
export const register = async (req, res) => {
    try {
        const residentData = req.body;
        const resident = await Resident.create(residentData);
        res.status(201).json({ success: true, data: resident });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all residents
export const getAllResidents = async (req, res) => {
    try {
        const residents = await Resident.find();
        res.status(200).json({ success: true, data: residents });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get resident by ID
export const getResidentById = async (req, res) => {
    try {
        const { id } = req.params;
        const resident = await Resident.findById(id);
        if (!resident) {
            return res.status(404).json({ success: false, message: 'Resident not found' });
        }
        res.status(200).json({ success: true, data: resident });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update resident by ID
export const updateResidentById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedResident = await Resident.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedResident) {
            return res.status(404).json({ success: false, message: 'Resident not found' });
        }
        res.status(200).json({ success: true, data: updatedResident });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete resident by ID
export const deleteResidentById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedResident = await Resident.findByIdAndDelete(id);
        if (!deletedResident) {
            return res.status(404).json({ success: false, message: 'Resident not found' });
        }
        res.status(200).json({ success: true, message: 'Resident deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
