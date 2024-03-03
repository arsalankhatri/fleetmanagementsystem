import mongoose, { Document } from 'mongoose';
import path from 'path';

export interface Vehicle extends Document {
    vmodel: string;
    name: string;
    type: string;
    status: string;
    picture: string;
}

const vehicleSchema = new mongoose.Schema({
    vmodel: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, enum: ['active', 'maintenance'], default: 'active' },
    picture: { type: String}
});
vehicleSchema.virtual('picturePath').get(function (this: { picture: string }) {
    return this.picture ? path.join('uploads', this.picture) : null;
  });

export const VehicleModel = mongoose.model<Vehicle>('Vehicle', vehicleSchema);