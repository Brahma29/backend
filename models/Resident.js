import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const residentSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, enum: ['Resident', 'Secretary'], required: true }
});

residentSchema.pre('save', async function (next) {
    try {
        // Hash the password only if it has been modified
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

residentSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const Resident = mongoose.model('Resident', residentSchema);

export default Resident
