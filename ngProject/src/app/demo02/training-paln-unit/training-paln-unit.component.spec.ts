import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPalnUnitComponent } from './training-paln-unit.component';

describe('TrainingPalnUnitComponent', () => {
  let component: TrainingPalnUnitComponent;
  let fixture: ComponentFixture<TrainingPalnUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPalnUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPalnUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
