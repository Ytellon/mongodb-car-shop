import { Router } from 'express';
import MotorController from '../controllers/motorController';
import MotorService from '../services/motorService';
import MotorModel from '../models/motorModel';

const route = Router();

const motorModel = new MotorModel();
const motorService = new MotorService(motorModel);
const motorController = new MotorController(motorService);

const motorRoute = '/motorcycles/:id';

route.post('/motorcycles', (req, res) => motorController.create(req, res));
route.get('/motorcycles', (req, res) => motorController.read(req, res));
route.get(motorRoute, (req, res) => motorController.readOne(req, res));
route.put(motorRoute, (req, res) => motorController.update(req, res));
route.delete(motorRoute, (req, res) => motorController.delete(req, res));

export default route;