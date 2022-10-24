import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model, Mongoose } from 'mongoose';
import CarModel from '../../../models/carModel';
import { carMocks, carIdMocks } from '../../mocks/carMocks';
import CarService from '../../../services/carService';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

describe('testando service carService', () => {

  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(carIdMocks);

    sinon
      .stub(carModel, 'read')
      .resolves([carIdMocks]);
    
    sinon
      .stub(carModel, 'readOne')
      .onCall(0)
      .resolves(carIdMocks)
      .onCall(1)
      .resolves(null);
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

  describe('testando o método read', () => {
    it('deve ser retornado um array de carros', async () => {
      const result = await carService.read();
      expect(result).to.be.eql([carIdMocks]);
    });
  });

  describe('testando o método readOne', () => {
    it('deve ser retornado um carro', async () => {
      const result = await carService.readOne(carIdMocks._id);
      expect(result).to.be.eql(carIdMocks);
    });
    it('deve ser lançado um erro', async () => {
      let error: any;
      try {
        await carService.readOne('2');
      }
      catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.be.eql(ErrorTypes.EntityNotFound);
    });
  });
});