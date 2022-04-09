import { TestBed } from '@angular/core/testing';

import { ApiEstService } from './api-est.service';

describe('ApiEstService', () => {
  let service: ApiEstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
