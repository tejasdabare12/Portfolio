import { TestBed } from '@angular/core/testing';

import { CentralSeviceService } from './central-sevice.service';

describe('CentralSeviceService', () => {
  let service: CentralSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
