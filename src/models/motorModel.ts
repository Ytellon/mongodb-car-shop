import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './mongoModel';

const MotorSchema = new Schema<IMotorcycle>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
  },
  {
    versionKey: false,
  },
);

class Motor extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motor', MotorSchema)) {
    super(model);
  }
}

export default Motor;