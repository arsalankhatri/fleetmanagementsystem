import request from 'supertest';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import maintenanceRoutes from '../src/routes/api/maintenanceRoutes';

const app: Express = express();

app.use(express.json());
app.use('/api/maintenance', maintenanceRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/vehicle_tracking_db');
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Maintenance Routes', () => {
  it('should get maintenance history for a vehicle', async () => {
    const response = await request(app)
      .get('/api/maintenance/65e474367f39a5536334bfa5')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});