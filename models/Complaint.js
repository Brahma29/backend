import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    description: { type: String, required: true },
    status: { type: String, enum: ['Open', 'In Progress', 'Closed'], required: true },
    assignedTo: { type: String, required: true },
    residentId: { type: String, required: true }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint