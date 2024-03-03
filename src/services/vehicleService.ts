import { VehicleModel, Vehicle } from '../models/vehicleModel';

export const registerVehicle = async (vehicleData: any): Promise<Vehicle> => {
    const vehicle = new VehicleModel(vehicleData);
    return await vehicle.save();
};

export const getVehicles = async (): Promise<Vehicle[]> => {
    return await VehicleModel.find();
};

export const getVehicleIds = async (): Promise<string[]> => {
    const vehicles = await getVehicles();
    return vehicles.map((vehicle) => vehicle.id);
};

export const updateVehicle = async (id: string, vehicleData: any): Promise<Vehicle> => {
    const updatedVehicle = await VehicleModel.findByIdAndUpdate(id, vehicleData, { new: true });
    if (!updatedVehicle) {
        return {} as Vehicle;
      }
    return updatedVehicle;
  };