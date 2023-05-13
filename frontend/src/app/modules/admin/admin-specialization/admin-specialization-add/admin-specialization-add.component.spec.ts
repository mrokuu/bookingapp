import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecializationAddComponent } from './admin-specialization-add.component';

describe('AdminSpecializationAddComponent', () => {
  let component: AdminSpecializationAddComponent;
  let fixture: ComponentFixture<AdminSpecializationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecializationAddComponent]
    });
    fixture = TestBed.createComponent(AdminSpecializationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
