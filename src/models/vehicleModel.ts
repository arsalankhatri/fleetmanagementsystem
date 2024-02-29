import mongoose, { Document } from 'mongoose';

export interface Vehicle extends Document {
    vmodel: string;
    name: string;
    type: string;
    status: string;
}

const vehicleSchema = new mongoose.Schema({
    vmodel: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, enum: ['active', 'maintenance'], default: 'active' },
});

export const VehicleModel = mongoose.model<Vehicle>('Vehicle', vehicleSchema);