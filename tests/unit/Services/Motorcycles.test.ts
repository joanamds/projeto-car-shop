import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { outputMoto, motoInput, motoUpdateInput, updatedMoto } from '../../mocks/motorcycles.mock';

const service = new MotorcycleService();

describe('Deveria criar uma nova moto', function () {
  it('Deveria criar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMoto);

    const result = await service.createMotorcycle(motoInput);

    expect(result).to.be.deep.equal(outputMoto);
  });

  describe('Deveria retornar todas as motos', function () {
    it('Retorna todas as motos', async function () {
      sinon.stub(Model, 'find').resolves([outputMoto]);

      const result = await service.findAll();

      expect(result).to.deep.equal([outputMoto]);
    });
  });

  describe('Deveria retornar a moto de acordo com o id', function () {
    it('Deveria retornar a moto', async function () {
      sinon.stub(Model, 'findById').resolves(outputMoto);

      const result = await service.findById('644af01a7a1062498784a5c8');

      expect(result).to.deep.equal(outputMoto);
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
    it('Deveria retornar uma excessão quando uma moto não é encontrada', async function () {
      sinon.stub(Model, 'findById').resolves();

      try {
        await service.findById('644af01a7a1062498784a5c3');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }

      sinon.restore();
    });
  });

  describe('Deveria atualizar uma moto de acordo com o id', function () {
    it('Deveria atualizar a moto', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMoto);

      const result = await service.update('644af01a7a1062498784a5c8', motoUpdateInput);

      expect(result).to.deep.equal(updatedMoto);
      sinon.restore();
    });
    it('Deveria retornar uma excessão quando o id é inválido', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves();

      try {
        await service.update('644af01a', motoUpdateInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }

      sinon.restore();
    });
    it('Deveria retornar uma excessão quando uma moto não é encontrada', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves();

      try {
        await service.update('644af01a7a1062498784a5c3', motoUpdateInput);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }

      sinon.restore();
    });
  });
});