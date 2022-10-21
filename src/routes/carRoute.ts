import { Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/carService';
import CarModel from '../models/carModel';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));

export default route;