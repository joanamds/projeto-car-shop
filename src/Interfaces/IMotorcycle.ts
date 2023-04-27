import IVehycle from './IVehicle';

export default interface IMotorcycle extends IVehycle {
  category: string;
  engineCapacity: number;
}
