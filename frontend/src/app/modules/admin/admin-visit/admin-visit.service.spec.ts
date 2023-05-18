import { TestBed } from '@angular/core/testing';

import { AdminVisitService } from './admin-visit.service';

describe('AdminVisitService', () => {
  let service: AdminVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
