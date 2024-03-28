import Notice from '../models/Notice.js';

// Post a new notice
export const post = async (req, res) => {
    try {
        const noticeData = req.body;
        const notice = await Notice.create(noticeData);
        res.status(201).json({ success: true, data: notice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all notices
export const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find();
        res.status(200).json({ success: true, data: notices });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get notice by ID
export const getNoticeById = async (req, res) => {
    try {
        const { id } = req.params;
        const notice = await Notice.findById(id);
        if (!notice) {
            return res.status(404).json({ success: false, message: 'Notice not found' });
        }
        res.status(200).json({ success: true, data: notice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update notice by ID
export const updateNoticeById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedNotice = await Notice.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedNotice) {
            return res.status(404).json({ success: false, message: 'Notice not found' });
        }
        res.status(200).json({ success: true, data: updatedNotice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete notice by ID
export const deleteNoticeById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNotice = await Notice.findByIdAndDelete(id);
        if (!deletedNotice) {
            return res.status(404).json({ success: false, message: 'Notice not found' });
        }
        res.status(200).json({ success: true, message: 'Notice deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
