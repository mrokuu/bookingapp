import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorAddComponent } from './admin-doctor-add.component';

describe('AdminDoctorAddComponent', () => {
  let component: AdminDoctorAddComponent;
  let fixture: ComponentFixture<AdminDoctorAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDoctorAddComponent]
    });
    fixture = TestBed.createComponent(AdminDoctorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
