import Resident from '../models/Resident.js';
import jwt from ''

// Register a new resident
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if username already exists
        const existingResident = await Resident.findOne({ username });
        if (existingResident) {
            return res.status(400).json({ success: false, message: 'Username already exists' });
        }
        // Create new resident with hashed password
        const resident = await Resident.create({ username, password });
        res.status(201).json({ success: true, data: resident });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

//Resident Login
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if resident exists
        const resident = await Resident.findOne({ username });
        if (!resident) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
        // Check password
        const validPassword = await resident.isValidPassword(password);
        if (!validPassword) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: resident._id, username: resident.username }, process.env.JWT_SECRET);
        res.status(200).json({ success: true, token });
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
