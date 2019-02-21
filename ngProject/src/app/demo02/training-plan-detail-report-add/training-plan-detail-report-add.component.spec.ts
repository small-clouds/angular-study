import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanDetailReportAddComponent } from './training-plan-detail-report-add.component';

describe('TrainingPlanDetailReportAddComponent', () => {
  let component: TrainingPlanDetailReportAddComponent;
  let fixture: ComponentFixture<TrainingPlanDetailReportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanDetailReportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanDetailReportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
