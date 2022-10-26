import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotorController {
  constructor(private _motorService: IService<IMotorcycle>) {}

  public async create(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const motor = await this._motorService.create(req.body);
    res.status(201).json(motor);
  }

  public async read(
    req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const motor = await this._motorService.read();
    res.status(200).json(motor);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle | null>,
  ) {
    const motor = await this._motorService.readOne(req.params.id);
    res.status(200).json(motor);
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle | null>,
  ) {
    const motor = await this._motorService.update(req.params.id, req.body);
    res.status(200).json(motor);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle | null>,
  ) {
    const motor = await this._motorService.delete(req.params.id);
    res.status(204).json(motor);
  }
}