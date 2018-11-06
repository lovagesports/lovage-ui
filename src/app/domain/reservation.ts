import { Player } from './player';

export class Reservation {
  id: number;
  start: Date;
  end: Date;
  initiator: Player;
  participants: Player[];
}
