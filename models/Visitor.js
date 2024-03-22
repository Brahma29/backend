import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    visitorName: { type: String, required: true },
    entryDateTime: { type: Date, required: true },
    exitDateTime: Date,
    permissionGranted: { type: Boolean, default: false },
    residentId: { type: String, required: true }
});

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor