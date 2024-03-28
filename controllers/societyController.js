import Society from '../models/Society.js';

// Register a new society
export const register = async (req, res) => {
    try {
        const societyData = req.body;
        const society = await Society.create(societyData);
        res.status(201).json({ success: true, data: society });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all societies
export const getAllSocieties = async (req, res) => {
    try {
        const societies = await Society.find();
        res.status(200).json({ success: true, data: societies });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get society by ID
export const getSocietyById = async (req, res) => {
    try {
        const { id } = req.params;
        const society = await Society.findById(id);
        if (!society) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, data: society });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update society by ID
export const updateSocietyById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSociety = await Society.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, data: updatedSociety });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete society by ID
export const deleteSocietyById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSociety = await Society.findByIdAndDelete(id);
        if (!deletedSociety) {
            return res.status(404).json({ success: false, message: 'Society not found' });
        }
        res.status(200).json({ success: true, message: 'Society deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
