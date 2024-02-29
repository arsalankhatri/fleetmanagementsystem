
import { Request, Response } from 'express';
import * as trackingService from '../services/trackingService';
import * as VehicleService from '../services/vehicleService';
const vehicleTrackingData: Record<string, { status: string, location: string }> = {};

export const getVehicleTracking = (req: Request, res: Response): void => {
    const { vehicleId } = req.params;
    const vehicleTrackingInfo = vehicleTrackingData[vehicleId];

    if (vehicleTrackingInfo) {
        res.status(200).json(vehicleTrackingInfo);
    } else {
        res.status(404).json({ error: 'Vehicle not found or tracking data not available.' });
    }
};

export const updateVehicleTracking = (vehicleId: string, status: string, location: string): void => {
    vehicleTrackingData[vehicleId] = { status, location };
};

// Start the simulation when the application starts
VehicleService.getVehicleIds().then((vehicleIds:string[]) => {
    trackingService.simulateTrackingUpdates(vehicleIds, updateVehicleTracking);
})