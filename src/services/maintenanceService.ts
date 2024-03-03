import MaintenanceRecordModel, { MaintenanceRecord } from '../models/maintenanceModel';

export const logMaintenance = async (vehicleId: string, record: MaintenanceRecord): Promise<MaintenanceRecord> => {
    try {
        const maintenanceRecord = new MaintenanceRecordModel({
            vehicleId,
            description: record.description,
            date: new Date(record.date),
            typeofmaintenance: record.typeofmaintenance
        });
        return await maintenanceRecord.save();
    } catch (error) {
        throw new Error('Failed to log maintenance.');
    }
};

export const getMaintenanceHistory = async (vehicleId: string): Promise<MaintenanceRecord[]> => {
    try {
        const maintenanceHistory = await MaintenanceRecordModel.find({ vehicleId }).exec();
        return maintenanceHistory;
    } catch (error) {
        throw new Error('Failed to retrieve maintenance history.');
    }
};
