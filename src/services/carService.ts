import { ICar, CarSchema } from '../interfaces/Icar';
import { IModel } from '../interfaces/Imodel';
import { IService } from '../interfaces/IService';

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
}
