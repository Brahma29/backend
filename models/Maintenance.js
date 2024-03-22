import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    description: String,
    scheduledDate: { type: Date, required: true },
    completedDate: Date,
    amount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], required: true },
    residentId: { type: String, required: true },
    invoiceId: String
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);

export default Maintenance;
