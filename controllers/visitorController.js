import Visitor from '../models/Visitor.js';

// Register a new visitor
export const register = async (req, res) => {
    try {
        const visitorData = req.body;
        const visitor = await Visitor.create(visitorData);
        res.status(201).json({ success: true, data: visitor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all visitors
export const getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json({ success: true, data: visitors });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
