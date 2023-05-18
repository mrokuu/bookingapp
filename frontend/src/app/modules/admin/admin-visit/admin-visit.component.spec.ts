import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisitComponent } from './admin-visit.component';

describe('AdminVisitComponent', () => {
  let component: AdminVisitComponent;
  let fixture: ComponentFixture<AdminVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVisitComponent]
    });
    fixture = TestBed.createComponent(AdminVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
