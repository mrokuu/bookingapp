import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecializationComponent } from './admin-specialization.component';

describe('AdminSpecializationComponent', () => {
  let component: AdminSpecializationComponent;
  let fixture: ComponentFixture<AdminSpecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSpecializationComponent]
    });
    fixture = TestBed.createComponent(AdminSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
