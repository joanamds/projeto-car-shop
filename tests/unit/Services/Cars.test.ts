import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { outputCar, carInput } from '../../mocks/cars.mock';

const service = new CarService();

describe('Deveria criar um novo carro', function () {
  it('Deveria criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputCar);

    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(outputCar);
  });

  describe('Deveria retornar os carros', function () {
    it('Deveria retornar todos os carros', async function () {
      sinon.stub(Model, 'find').resolves([outputCar]);

      const result = await service.findAll();

      expect(result).to.deep.equal([outputCar]);
    });
  });

  describe('Deveria retornar o carro de acordo com o id', function () {
    it('Deveria retornar todos os carros', async function () {
      sinon.stub(Model, 'findById').resolves(outputCar);

      const result = await service.findById('644af01a7a1062498784a5c8');

      expect(result).to.deep.equal(outputCar);
      sinon.restore();
    });
    it('Deveria retornar uma excessão quando o id é inválido', async function () {
      sinon.stub(Model, 'findById').resolves();

      try {
        await service.findById('644af01a');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }

      sinon.restore();
    });
    it('Deveria retornar uma excessão quando um carro não é encontrado', async function () {
      sinon.stub(Model, 'findById').resolves();

      try {
        await service.findById('644af01a7a1062498784a5c3');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }

      sinon.restore();
    });
  });
});