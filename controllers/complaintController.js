import Complaint from '../models/Complaint.js';

// Register a new complaint
export const register = async (req, res) => {
    try {
        const complaintData = req.body;
        const complaint = await Complaint.create(complaintData);
        res.status(201).json({ success: true, data: complaint });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all complaints
export const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json({ success: true, data: complaints });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get complaint by ID
export const getComplaintById = async (req, res) => {
    try {
        const { id } = req.params;
        const complaint = await Complaint.findById(id);
        if (!complaint) {
            return res.status(404).json({ success: false, message: 'Complaint not found' });
        }
        res.status(200).json({ success: true, data: complaint });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update complaint by ID
export const updateComplaintById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComplaint = await Complaint.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedComplaint) {
            return res.status(404).json({ success: false, message: 'Complaint not found' });
        }
        res.status(200).json({ success: true, data: updatedComplaint });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete complaint by ID
export const deleteComplaintById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComplaint = await Complaint.findByIdAndDelete(id);
        if (!deletedComplaint) {
            return res.status(404).json({ success: false, message: 'Complaint not found' });
        }
        res.status(200).json({ success: true, message: 'Complaint deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
