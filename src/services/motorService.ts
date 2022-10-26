import { IMotorcycle, MotorSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/Imodel';
import { IService } from '../interfaces/IService';
import { ErrorTypes } from '../errors/catalog';

export default class MotorService implements IService<IMotorcycle> {
  private _motor: IModel<IMotorcycle>;

  constructor(motor: IModel<IMotorcycle>) {
    this._motor = motor;
  }

  public async create(motor: unknown): Promise<IMotorcycle> {
    const parsed = MotorSchema.safeParse(motor);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motor.create(parsed.data);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motor.read();
  }

  public async readOne(id: string): Promise<IMotorcycle | null> {
    const motor = await this._motor.readOne(id);
    if (!motor) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return motor;
  }

  public async update(id: string, motor: unknown): Promise<IMotorcycle | null> {
    const parsed = MotorSchema.safeParse(motor);

    if (!parsed.success) {
      throw parsed.error;
    }
    const updateMotor = await this._motor.update(id, parsed.data);
    if (!updateMotor) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return updateMotor;
  }

  public async delete(id: string): Promise<IMotorcycle | null> {
    const motor = await this._motor.delete(id);
    if (!motor) {
      throw Error(ErrorTypes.EntityNotFound);
    }
    return motor;
  }
}