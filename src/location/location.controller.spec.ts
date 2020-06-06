import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MockHelper } from '../common/mock.helper';
import { GenericFactory } from '../common/generic.factory';
import { LocationMappingService } from './location-mapping.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { Location } from './location.entity';

describe('Location Controller', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
      list: {
        resolves: [
          GenericFactory.create<Location>(Location, {
            id: 1,
            name: 'Location 1',
          }),
          GenericFactory.create<Location>(Location, {
            id: 2,
            name: 'Location 2',
          }),
        ],
      },
    });

    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(
      mappingRegistryService,
    );
    locationController = await new LocationController(
      mockLocationService,
      mappingRegistryService,
    );
  });

  it('should be defined', () => {
    expect(locationController).toBeDefined();
  });

  it('should return an array with locations', () => {
    expect(locationController.listLocations()).resolves.toMatchObject({
      locations: [
        {
          id: 1,
          name: 'Location 1',
        },
        {
          id: 2,
          name: 'Location 2',
        },
      ],
    });
  });
});
