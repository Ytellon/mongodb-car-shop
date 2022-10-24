import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model, Mongoose } from 'mongoose';
import Car from '../../../models/carModel';
import { carMocks, carIdMocks } from '../../mocks/carMocks';

describe('testando Model carModel', () => {

  const carModel = new Car();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carIdMocks);
  });

  after(()=>{
    sinon.restore();
  })

  describe('testando o método create', () => {
    it('deve ser cadastrado um novo carro', async () => {
      const result = await carModel.create(carMocks);
      expect(result).to.be.eql(carIdMocks);
    });
  });

});