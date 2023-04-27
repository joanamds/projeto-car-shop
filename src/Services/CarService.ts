import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const carODM = new CarODM();

class CarService {
  public async createCar(car: ICar) {
    const newCar = await carODM.create(car);
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }

  public async findAll() {
    const cars = await carODM.getAll();
    const carsDomain = cars.map((car) => { 
      const newCar = new Car(car);
      return newCar;
    });
    return carsDomain;
  }

  public async findById(id: string) {
    const car = await carODM.findById(id);
    if (car) {
      return new Car(car);
    }
    return null;
  }
}

export default CarService;
