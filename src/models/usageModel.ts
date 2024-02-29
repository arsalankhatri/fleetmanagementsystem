import mongoose, { Schema, Document } from 'mongoose';

export interface UsageRecord extends Document {
    vehicleId: string;
    hoursOperated: number;
    distanceTraveled: number;
    timestamp: Date;
}

const usageSchema: Schema = new Schema({
    vehicleId: { type: String, required: true },
    hoursOperated: { type: Number, default: 0 },
    distanceTraveled: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<UsageRecord>('UsageRecord', usageSchema);
