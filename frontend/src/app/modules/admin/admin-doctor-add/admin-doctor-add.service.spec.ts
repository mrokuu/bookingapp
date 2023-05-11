import { TestBed } from '@angular/core/testing';

import { AdminDoctorAddService } from './admin-doctor-add.service';

describe('AdminDoctorAddService', () => {
  let service: AdminDoctorAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDoctorAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
