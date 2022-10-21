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
    res.status(201).send(car);
  }
}