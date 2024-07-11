import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: '1',
      name: 'Ryu',
      belt: 'white',
      status: 'active',
    },
    {
      id: '2',
      name: 'Ken',
      belt: 'black',
      status: 'active',
    },
    {
      id: '3',
      name: 'Yoshi',
      belt: 'gold',
      status: 'active',
    },
  ];

  getNinjas(belt?: 'white' | 'black' | 'gold') {
    if (belt) {
      return this.ninjas.filter((ninja) => ninja.belt === belt);
    }
    return this.ninjas;
  }
}
