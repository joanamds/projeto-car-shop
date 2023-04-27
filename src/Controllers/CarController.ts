import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      ...this.req.body,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.next(error);
    }
  }

  public async findAll() {
    const cars = await this.service.findAll();
    return this.res.status(200).json(cars);
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findById(id);
      if (car) {
        return this.res.status(200).json(car);
      }
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }

  public async update() {
    const { id } = this.req.params;
    const updateCar: ICar = {
      id,
      ...this.req.body,
    };
    try {
      const carUpdate = await this.service.update(id, updateCar);
      if (carUpdate) {
        return this.res.status(200).json(updateCar);
      }
      return this.res.status(404).json({ message: 'Car not found' });
    } catch (error: any) {
      return this.res.status(422).json({ message: error.message });
    }
  }
}

export default CarController;
