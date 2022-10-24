import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/carModel';
import { carMocks, carIdMocks } from '../../mocks/carMocks';
import CarService from '../../../services/carService';
import { Request, response, Response } from 'express';
import CarController from '../../../controllers/carController';

describe('testando service carController', () => {

  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(async () => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('testando o método create', () => {
    beforeEach( async () => {
      sinon
        .stub(carService, 'create')
        .resolves(carIdMocks);
    });
    it('deve ser cadastrado um novo carro', async () => {
      req.body = carMocks;
      await carController.create(req, res);
      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(statusStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(carIdMocks)).to.be.true;
    });
  });

  describe('testando o método read', () => {
    beforeEach( async () => {
      sinon
        .stub(carService, 'read')
        .resolves([carIdMocks]);
    });
    it('deve ser retornado um array de carros', async () => {
      await carController.read(req, res);
      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith([carIdMocks])).to.be.true;
    });
  });

  describe('testando o método readOne', () => {
    beforeEach( async () => {
      sinon
        .stub(carService, 'readOne')
        .resolves(carIdMocks);
    });
    it('deve ser retornado um carro', async () => {
      req.params = { id: carIdMocks._id };
      await carController.readOne(req, res);
      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carIdMocks)).to.be.true;
    });
  });

  describe('testando o método update', () => {
    beforeEach( async () => {
      sinon
        .stub(carService, 'update')
        .resolves(carIdMocks);
    });
    it('deve ser atualizado um carro', async () => {
      req.params = { id: carIdMocks._id };
      req.body = carMocks;
      await carController.update(req, res);
      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carIdMocks)).to.be.true;
    });
  });

  describe('testando o método delete', () => {
    beforeEach( async () => {
      sinon
        .stub(carService, 'delete')
        .resolves(carIdMocks);
    });
    it('deve ser deletado um carro', async () => {
      req.params = { id: carIdMocks._id };
      await carController.delete(req, res);
      const statusStub = res.status as sinon.SinonStub;
      const jsonStub = res.json as sinon.SinonStub;
      
      expect(statusStub.calledWith(204)).to.be.true;
      expect(jsonStub.calledWith(carIdMocks)).to.be.true;
    });
  });
});