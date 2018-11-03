import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Field } from '../domain/field';

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
    return { fields };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(fields: Field[]): number {
    return fields.length > 0 ? Math.max(...fields.map(field => field.id)) + 1 : 11;
  }
}
