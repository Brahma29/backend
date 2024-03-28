import mongoose from "mongoose";

const societySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    secretary: { type: mongoose.SchemaTypes.ObjectId, ref: 'Resident' },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    registrationDate: { type: Date, default: Date.now }
});

const Society = mongoose.model('Society', societySchema);

export default Society;