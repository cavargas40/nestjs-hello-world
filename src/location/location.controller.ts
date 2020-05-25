import { Controller, Get } from '@nestjs/common';

interface ILocationListDto {
  locations: Array<string>;
}

@Controller('location')
export class LocationController {
  @Get('list')
  listLocations(): ILocationListDto {
    return {
      locations: ['location 1', 'location 2', 'location 3'],
    };
  }
}
