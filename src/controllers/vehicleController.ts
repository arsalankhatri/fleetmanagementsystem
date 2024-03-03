import { Request, Response } from 'express';
import { Vehicle, VehicleModel } from '../models/vehicleModel';
import * as VehicleService from '../services/vehicleService';

export const registerVehicle = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vmodel, type, name, status } = req.body;
        const picture = req.file ? req.file.filename : null;

        const vehicleInstance = new VehicleModel({
            vmodel,
            type,
            name,
            status,
            picture: picture || ''
        });
        const vehicle: Vehicle = await VehicleService.registerVehicle(vehicleInstance);
        res.status(201).send(vehicle);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

export const getVehicles = async (req: Request, res: Response): Promise<void> => {
    try {
        const vehicles = await VehicleService.getVehicles();
        res.status(200).send(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};