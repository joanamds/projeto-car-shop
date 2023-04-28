import Motorcycle from '../../src/Domains/Motorcycle';
import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const motoModel = 'Dafra Horizon 150';

export const motoInput: IMotorcycle = {
  model: motoModel,
  year: 2020,
  color: 'Red',
  status: true,
  buyValue: 11.000,
  category: 'Custom',
  engineCapacity: 150,
};

export const motoUpdateInput: IMotorcycle = {
  model: motoModel,
  year: 2020,
  color: 'Silver',
  status: true,
  buyValue: 11.000,
  category: 'Custom',
  engineCapacity: 150,
};

const moto = {
  id: '644bceadc0bc1b361c5cb0e8',
  model: motoModel,
  year: 2020,
  color: 'Red',
  status: true,
  buyValue: 11,
  category: 'Custom',
  engineCapacity: 150,
};

const motoUpdated = {
  id: '644bceadc0bc1b361c5cb0e8',
  model: motoModel,
  year: 2020,
  color: 'Silver',
  status: true,
  buyValue: 11,
  category: 'Custom',
  engineCapacity: 150,
};

export const outputMoto: Motorcycle = new Motorcycle(moto);
export const updatedMoto: Motorcycle = new Motorcycle(motoUpdated);
