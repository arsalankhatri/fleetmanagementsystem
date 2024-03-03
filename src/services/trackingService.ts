import * as VehicleService from '../services/vehicleService';
export const simulateTrackingUpdates = (
    updateCallback: (vehicleId: string, status: string, location: string, speed: number) => void
): void => {
    setInterval(async () => {
       const vehicleIds =  await VehicleService.getVehicleIds();
        // Simulate tracking updates for registered vehicles
        vehicleIds.forEach(vehicleId => {
            const statusOptions = ['active', 'maintenance'];
            const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
            const randomLocation = generateRandomLocation();
            const randomSpeed = Math.floor(Math.random() * (200 - 1 + 1)) + 1;

            updateCallback(vehicleId, randomStatus, randomLocation, randomSpeed);
        });
    }, 3000); // Update every 3 seconds
};

const generateRandomLocation = (): string => {
    const latitude = (Math.random() * 180 - 90).toFixed(6);
    const longitude = (Math.random() * 360 - 180).toFixed(6);
    return `${latitude}, ${longitude}`;
};
