import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecializationUpdateComponent } from './admin-specialization-update.component';

describe('AdminSpecializationUpdateComponent', () => {
  let component: AdminSpecializationUpdateComponent;
  let fixture: ComponentFixture<AdminSpecializationUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecializationUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminSpecializationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
