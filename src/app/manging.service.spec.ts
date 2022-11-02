import { TestBed } from '@angular/core/testing';

import { MangingService } from './manging.service';

describe('MangingService', () => {
  let service: MangingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
