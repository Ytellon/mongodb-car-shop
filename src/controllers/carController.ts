import { Request, Response } from 'express';
import { ICar } from '../interfaces/Icar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _carService: IService<ICar>) {}

  public async create(
    req: Request,
    res: Response<ICar>,
  ) {
    const car = await this._carService.create(req.body);
    res.status(201).json(car);
  }

  public async read(
    req: Request,
    res: Response<ICar[]>,
  ) {
    const car = await this._carService.read();
    res.status(200).json(car);
  }

  public async readOne(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const car = await this._carService.readOne(req.params.id);
    res.status(200).json(car);
  }
}