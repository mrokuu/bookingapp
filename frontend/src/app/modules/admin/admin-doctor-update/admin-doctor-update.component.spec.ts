import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorUpdateComponent } from './admin-doctor-update.component';
import { AdminSpecializationNameDto } from '../admin-doctor-add/model/AdminSpecializationNameDto';

describe('AdminDoctorUpdateComponent', () => {
  let component: AdminDoctorUpdateComponent;
  let fixture: ComponentFixture<AdminDoctorUpdateComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDoctorUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminDoctorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
