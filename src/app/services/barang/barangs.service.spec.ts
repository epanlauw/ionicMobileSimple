import { TestBed } from '@angular/core/testing';

import { BarangsService } from './barangs.service';

describe('BarangsService', () => {
  let service: BarangsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarangsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
