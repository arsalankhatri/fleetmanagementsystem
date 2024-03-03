import request from 'supertest';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import vehicleRoutes from '../src/routes/api/vehicleRoutes';

const app: Express = express();

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/vehicle_tracking_db');
});

afterAll(async () => {
  await mongoose.disconnect();
});


describe('Vehicle Routes', () => {
  it('should register a new vehicle', async () => {
    const response = await request(app)
      .post('/api/vehicles')
      .send({
        vmodel: 'TestModel',
        name: 'TestVehicle',
        type: 'Car',
      })
      .expect(201);

    expect(response.body.vmodel).toEqual('TestModel');
    expect(response.body.name).toEqual('TestVehicle');
    expect(response.body.type).toEqual('Car');
    expect(response.body.status).toEqual('active');
    expect(response.body).toHaveProperty('picture');

  });

  it('should get all vehicles', async () => {
    const response = await request(app)
      .get('/api/vehicles')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

});