import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model, Mongoose } from 'mongoose';
import Car from '../../../models/carModel';
import { carMocks, carIdMocks } from '../../mocks/carMocks';
import { ErrorTypes } from '../../../errors/catalog';

describe('testando Model carModel', () => {

  const carModel = new Car();

  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carIdMocks);

    sinon
      .stub(Model, 'find')
      .resolves([carIdMocks]);

    sinon
      .stub(Model, 'findById')
      .resolves(carIdMocks);
    
    sinon
      .stub(Model, 'findByIdAndUpdate')
      .resolves(carIdMocks);

    sinon
      .stub(Model, 'findByIdAndDelete')
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

  describe('testando o método read', () => {
    it('deve ser retornado um array de carros', async () => {
      const result = await carModel.read();
      expect(result).to.be.eql([carIdMocks]);
    });
  });

  describe('testando o método readOne', () => {
    it('deve ser retornado um carro', async () => {
      const result = await carModel.readOne(carIdMocks._id);
      expect(result).to.be.eql(carIdMocks);
    });
    it('deve ser lançado um erro', async () => {
      let error: any;
      try {
        await carModel.readOne('2');
      }
      catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.be.eql(ErrorTypes.InvalidMongoId);
    });
  });
  describe('testando o método update', () => {
    it('deve ser atualizado um carro', async () => {
      const result = await carModel.update(carIdMocks._id, carMocks);
      expect(result).to.be.eql(carIdMocks);
    });
    it('deve ser lançado um erro', async () => {
      let error: any;
      try {
        await carModel.update('2', carMocks);
      }
      catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.be.eql(ErrorTypes.InvalidMongoId);
    });
  });
  describe('testando o método delete', () => {
    it('deve ser deletado um carro', async () => {
      const result = await carModel.delete(carIdMocks._id);
      expect(result).to.be.eql(carIdMocks);
    });
    it('deve ser lançado um erro', async () => {
      let error: any;
      try {
        await carModel.delete('2');
      }
      catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.be.eql(ErrorTypes.InvalidMongoId);
    });
  });
});