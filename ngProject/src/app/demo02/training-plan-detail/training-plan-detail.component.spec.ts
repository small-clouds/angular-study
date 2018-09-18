import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanDetailComponent } from './training-plan-detail.component';

describe('TrainingPlanDetailComponent', () => {
  let component: TrainingPlanDetailComponent;
  let fixture: ComponentFixture<TrainingPlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
