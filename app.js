import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

// Import routes
import societyRoutes from './routes/society.js';
import residentRoutes from './routes/resident.js';
import complaintRoutes from './routes/complaint.js';
import noticeRoutes from './routes/notice.js';
import visitorRoutes from './routes/visitor.js';
import maintenanceRoutes from './routes/maintenance.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB()

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/society', societyRoutes);
app.use('/api/resident', residentRoutes);
app.use('/api/complaint', complaintRoutes);
app.use('/api/notice', noticeRoutes);
app.use('/api/visitor', visitorRoutes);
app.use('/api/maintenance', maintenanceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
