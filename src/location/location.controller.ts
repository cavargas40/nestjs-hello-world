import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationListDto } from './location-list.dto';
import { MappingRegistryService } from 'src/common/mapping-registry.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';

@Controller('location')
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get('list')
  public async listLocations(): Promise<LocationListDto> {
    const locations = await this.locationService.list();
    const dtos = locations.map(location =>
      this.mappingRegistryService.map<LocationDto>(
        Location.name,
        LocationDto.name,
        location,
      ),
    );

    return { locations: dtos };
  }
}
