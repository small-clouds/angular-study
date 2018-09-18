import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanShowComponent } from './training-plan-show.component';

describe('TrainingPlanShowComponent', () => {
  let component: TrainingPlanShowComponent;
  let fixture: ComponentFixture<TrainingPlanShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
