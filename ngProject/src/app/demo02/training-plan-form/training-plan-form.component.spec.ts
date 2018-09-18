import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanFormComponent } from './training-plan-form.component';

describe('TrainingPlanFormComponent', () => {
  let component: TrainingPlanFormComponent;
  let fixture: ComponentFixture<TrainingPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
