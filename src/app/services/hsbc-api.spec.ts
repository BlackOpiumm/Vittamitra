import { TestBed } from '@angular/core/testing';

import { HsbcApiService } from './hsbc-api';

describe('HsbcApi', () => {
  let service: HsbcApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsbcApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
