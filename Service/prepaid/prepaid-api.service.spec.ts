import { TestBed } from '@angular/core/testing';

import { PrepaidApiService } from './prepaid-api.service';

describe('PrepaidApiService', () => {
  let service: PrepaidApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepaidApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
