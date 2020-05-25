import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from './location.controller';

describe('Location Controller', () => {
  let controller: LocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
    }).compile();

    controller = module.get<LocationController>(LocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return locations', () => {
    expect(controller.listLocations()).toMatchObject({
      locations: [
        'location 1',
        'location 2',
        'location 3'
      ]
    })
  })
});
