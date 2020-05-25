import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
  public list(): Array<string> {
    
    return ['Location 1', 'Location 2', 'Location 3'];
  }
}
