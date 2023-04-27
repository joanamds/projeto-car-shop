import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      ...this.req.body,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findAll() {
    const motorcycles = await this.service.findAll();
    return this.res.status(200).json(motorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.findById(id);
      if (motorcycle) {
        return this.res.status(200).json(motorcycle);
      }
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }

  public async update() {
    const { id } = this.req.params;
    const updateMotorcycle: IMotorcycle = {
      id,
      ...this.req.body,
    };
    try {
      const motorcycleUpdate = await this.service.update(id, updateMotorcycle);
      if (motorcycleUpdate) {
        return this.res.status(200).json(updateMotorcycle);
      }
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }
}

export default MotorcycleController;