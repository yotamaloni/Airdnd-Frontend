import { TestBed } from '@angular/core/testing';

import { HotelSearchResolverService } from './hotel-search-resolver.service';

describe('HotelSearchResolverService', () => {
  let service: HotelSearchResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelSearchResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
