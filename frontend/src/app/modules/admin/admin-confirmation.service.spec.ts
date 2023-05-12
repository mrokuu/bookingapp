import { TestBed } from '@angular/core/testing';

import { AdminConfirmationService } from './admin-confirmation.service';

describe('AdminConfirmationService', () => {
  let service: AdminConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
