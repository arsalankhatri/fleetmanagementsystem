import mongoose, { Schema, Document } from 'mongoose';

export interface MaintenanceRecord extends Document {
    vehicleId: string;
    description: string;
    date: Date;
    typeofmaintenance?: string;
}

const maintenanceSchema: Schema = new Schema({
    vehicleId: { type: String, required: true },
    description: { type: String, required: true },
    typeofmaintenance: { type: String },
    date: { type: Date, default: Date.now },
});

export default mongoose.model<MaintenanceRecord>('MaintenanceRecord', maintenanceSchema);
