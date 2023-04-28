import Car from '../../src/Domains/Car';
import ICar from '../../src/Interfaces/ICar';

export const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const car = {
  id: '644af01a7a1062498784a5c8',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const outputCar: Car = new Car(car);
