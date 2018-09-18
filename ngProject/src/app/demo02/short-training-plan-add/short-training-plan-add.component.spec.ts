import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTrainingPlanAddComponent } from './short-training-plan-add.component';

describe('ShortTrainingPlanAddComponent', () => {
  let component: ShortTrainingPlanAddComponent;
  let fixture: ComponentFixture<ShortTrainingPlanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTrainingPlanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTrainingPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
