import { Reservation } from './reservation';

export class Field {
  id: number;
  name: string;
  location: string;
  length: number;
  width: number;
  recommendedPlayers: number;
  pricePerHour: number;
  reservations: Reservation[];
}
