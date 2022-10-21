import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/Imodel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(item: T): Promise<T> {
    return this._model.create({ ...item });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    return this._model.findById(id);
  }

  public async update(id: string, item: T): Promise<T | null> {
    return this._model.findByIdAndUpdate(id, { ...item as UpdateQuery<T> }, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    return this._model.findByIdAndDelete(id);
  }
}