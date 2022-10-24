import { ICar, CarSchema } from '../interfaces/Icar';
import { IModel } from '../interfaces/Imodel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(car: IModel<ICar>) {
    this._car = car;
  }

  public async create(car: unknown): Promise<ICar> {
    const parsed = CarSchema.safeParse(car);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(id: string): Promise<ICar | null> {
    const car = await this._car.readOne(id);
    if (!car) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return car;
  }

  public async update(id: string, car: unknown): Promise<ICar | null> {
    const parsed = CarSchema.safeParse(car);

    if (!parsed.success) {
      throw parsed.error;
    }
    const updateCar = await this._car.update(id, parsed.data);
    if (!updateCar) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return updateCar;
  }

  public async delete(id: string): Promise<ICar | null> {
    const car = await this._car.delete(id);
    if (!car) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return car;
  }
}
