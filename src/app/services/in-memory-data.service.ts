import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Field } from '../domain/field';
import { Player } from '../domain/player';
import { Reservation } from '../domain/reservation';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fields = [
      { id: 11, name: 'Balcescu', location: 'Balcescu' },
      { id: 12, name: 'Teren 1', location: 'Turzii' },
      { id: 13, name: 'Teren Forbal 1', location: 'Baza Transilvania' },
      { id: 14, name: '', location: 'Baza gheorgheni' },
      { id: 15, name: 'Baba novac', location: 'Baba novac' },
      { id: 16, name: 'Teren mic', location: 'Cotton' },
      { id: 17, name: '', location: 'Cora' },
      { id: 18, name: 'Padin', location: 'Padin' },
      { id: 19, name: 'Teren Forbal 2', location: 'Baza Transilvania' }
    ];

    const players = [
      { id: 21, name: 'Tudor Chirila' },
      { id: 22, name: 'Kazimir Obrenovic' },
      { id: 23, name: 'Laur Marat' }
    ];

    const reservations = [
      {
        id: 31,
        field: { id: 11, name: 'Balcescu', location: 'Balcescu' },
        start: '2018-11-05T20:30:00+02:00',
        end: '2018-11-05T22:00:00+02:00',
        initiator: { id: 21, name: 'Tudor Chirila' },
        participants: [
          { id: 21, name: 'Tudor Chirila' },
          { id: 22, name: 'Kazimir Obrenovic' }
        ]
      },
      {
        id: 31,
        field: { id: 15, name: 'Baba novac', location: 'Baba novac' },
        start: '2018-12-05T10:30:00+02:00',
        end: '2018-12-05T12:00:00+02:00',
        initiator: { id: 23, name: 'Laur Marat' },
        participants: [
          { id: 23, name: 'Laur Marat' }
        ]
      }
    ];

    return { fields, players, reservations };
  }

  genId<T extends Field | Player | Reservation>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
