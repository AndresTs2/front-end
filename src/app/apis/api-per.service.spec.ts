import { TestBed } from '@angular/core/testing';

import { ApiPerService } from './api-per.service';

describe('ApiPerService', () => {
  let service: ApiPerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
