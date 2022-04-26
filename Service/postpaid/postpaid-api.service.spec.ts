import { TestBed } from '@angular/core/testing';

import { PostpaidApiService } from './postpaid-api.service';

describe('PostpaidApiService', () => {
  let service: PostpaidApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostpaidApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
