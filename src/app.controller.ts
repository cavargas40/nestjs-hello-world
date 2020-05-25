import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface ILocationListDto {
  locations: Array<string>;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list-locations')
  listLocations(): ILocationListDto {
    return {
      locations: [
        'location 1',
        'location 2',
        'location 3'
      ]
    }
  }
}
