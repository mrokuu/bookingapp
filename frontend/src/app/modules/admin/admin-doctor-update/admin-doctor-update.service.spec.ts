import { TestBed } from '@angular/core/testing';

import { AdminDoctorUpdateService } from './admin-doctor-update.service';

describe('AdminDoctorUpdateService', () => {
  let service: AdminDoctorUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDoctorUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
