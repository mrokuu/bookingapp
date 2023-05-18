import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisitUpdateComponent } from './admin-visit-update.component';

describe('AdminVisitUpdateComponent', () => {
  let component: AdminVisitUpdateComponent;
  let fixture: ComponentFixture<AdminVisitUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVisitUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminVisitUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
