import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/Icar';
import MongoModel from './mongoModel';

const CarSchema = new Schema<ICar>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    doorsQty: Number,
    seatsQty: Number,
  },
  {
    versionKey: false,
  },
);

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', CarSchema)) {
    super(model);
  }
}

export default Car;