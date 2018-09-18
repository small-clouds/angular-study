import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerApplyComponent } from './lecturer-apply.component';

describe('LecturerApplyComponent', () => {
  let component: LecturerApplyComponent;
  let fixture: ComponentFixture<LecturerApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
