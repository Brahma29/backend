import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    paid: { type: Boolean, default: false },
    paymentDate: Date,
    maintenanceId: { type: String, required: true }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;