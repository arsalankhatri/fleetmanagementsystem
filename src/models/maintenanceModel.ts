import mongoose, { Schema, Document } from 'mongoose';

export interface MaintenanceRecord extends Document {
    vehicleId: string;
    description: string;
    date: Date;
}

const maintenanceSchema: Schema = new Schema({
    vehicleId: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model<MaintenanceRecord>('MaintenanceRecord', maintenanceSchema);
