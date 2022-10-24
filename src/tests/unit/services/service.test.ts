import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model, Mongoose } from 'mongoose';
import CarModel from '../../../models/carModel';
import { carMocks, carIdMocks } from '../../mocks/carMocks';
import CarService from '../../../services/carService';
import { ZodError } from 'zod';  

describe('testando service carService', () => {

  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(carIdMocks);
  });

  after(()=>{
    sinon.restore();
  })

  describe('testando o método create', () => {
    it('deve ser cadastrado um novo carro', async () => {
      const result = await carService.create(carMocks);
      expect(result).to.be.eql(carIdMocks);
    });
    it('deve ser lançado um erro', async () => {
      let error;
      try {
        await carService.create({});
      }
      catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });
  });
});