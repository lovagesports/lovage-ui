import { Player } from './player';
import { Field } from './field';

export class Reservation {
    id: number;
    start: Date;
    end: Date;
    time: string;
    duration: number;
    field: Field;
    initiator: Player;
    participants: Player[];
}