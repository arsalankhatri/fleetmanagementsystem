import { Request, Response } from 'express';
import { Vehicle } from '../models/vehicleModel';
import * as VehicleService from '../services/vehicleService';

export const registerVehicle = async (req: Request, res: Response): Promise<void> => {
    try {
        const vehicleData = req.body;
        const vehicle: Vehicle = await VehicleService.registerVehicle(vehicleData);
        res.status(201).send(vehicle);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getVehicles = async (req: Request, res: Response): Promise<void> => {
    try {
        const vehicles = await VehicleService.getVehicles();
        res.status(200).send(vehicles);
    } catch (error) {
        res.status(500).send(error);
    }
};