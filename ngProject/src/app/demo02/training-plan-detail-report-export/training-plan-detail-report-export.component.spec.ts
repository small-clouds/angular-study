import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanDetailReportExportComponent } from './training-plan-detail-report-export.component';

describe('TrainingPlanDetailReportExportComponent', () => {
  let component: TrainingPlanDetailReportExportComponent;
  let fixture: ComponentFixture<TrainingPlanDetailReportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanDetailReportExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanDetailReportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
