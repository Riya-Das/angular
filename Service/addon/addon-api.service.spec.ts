import { TestBed } from '@angular/core/testing';

import { AddonApiService } from './addon-api.service';

describe('AddonApiService', () => {
  let service: AddonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
