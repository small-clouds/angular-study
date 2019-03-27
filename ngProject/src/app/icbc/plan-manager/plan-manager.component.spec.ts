import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanManagerComponent } from './plan-manager.component';

describe('PlanManagerComponent', () => {
  let component: PlanManagerComponent;
  let fixture: ComponentFixture<PlanManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
