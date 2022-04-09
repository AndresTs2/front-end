import { TestBed } from '@angular/core/testing';

import { ApiProService } from './api-pro.service';

describe('ApiProService', () => {
  let service: ApiProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
