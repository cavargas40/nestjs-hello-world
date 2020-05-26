import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock.helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
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

    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
        id: 1,
        name: 'Location 1',
      },
      {
        id: 2,
        name: 'Location 2',
      },
    ]);
  });
});
