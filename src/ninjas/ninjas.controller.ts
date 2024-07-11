import { NinjasService } from './ninjas.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('belt') belt: 'white' | 'black' | 'gold') {
    // This method will return all ninjas.
    return this.ninjasService.getNinjas(belt);
  }

  @Get(':id')
  getNinja(@Param('id') id: string) {
    // This method will return a single ninja.
    return {
      id,
    };
  }
  // We will define a method to handle GET requests to the /ninjas route.
  // This method will return all ninjas.
  // We will use the NinjasService to get all ninjas.
  // We will inject the NinjasService into the constructor.
  // We will define the getNinjas method to return all ninjas.
  // We will use the NinjasService to get all ninjas.
  // We will return the result of the getNinjas method.
  // We will define a method to handle GET requests to the /ninjas/:id route.
  // This method will return a single ninja.
  // We will use the NinjasService to get a single ninja.
  // We will inject the NinjasService into the constructor.
  // We will define the getNinja method to return a single ninja.
}
