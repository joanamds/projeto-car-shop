import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const motorcycleODM = new MotorcycleODM();

class MotorcycleService {
  public async createMotorcycle(motorcycle: IMotorcycle) {
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    if (newMotorcycle) {
      return new Motorcycle(newMotorcycle);
    }
    return null;
  }

  public async findAll() {
    const motorcycles = await motorcycleODM.getAll();
    const MotorcyclesDomain = motorcycles.map((motorcycle) => { 
      const newMotorcycle = new Motorcycle(motorcycle);
      return newMotorcycle;
    });
    return MotorcyclesDomain;
  }

  public async findById(id: string) {
    const motorcycle = await motorcycleODM.findById(id);
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async update(id: string, obj: IMotorcycle) {
    const updateMotorcycle = await motorcycleODM.update(id, obj);
    if (updateMotorcycle) {
      return new Motorcycle(updateMotorcycle);
    }
    return null;
  }
}

export default MotorcycleService;