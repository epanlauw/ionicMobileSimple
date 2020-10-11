import { TestBed } from '@angular/core/testing';

import { MotherboardsService } from './motherboards.service';

describe('MotherboardsService', () => {
  let service: MotherboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
