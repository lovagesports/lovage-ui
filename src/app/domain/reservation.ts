import { Field } from './field';
import { Player } from './player';

export class Reservation {
  id: number;
  field: Field;
  start: Date;
  end: Date;
  initiator: Player;
  participants: Player[];
}
