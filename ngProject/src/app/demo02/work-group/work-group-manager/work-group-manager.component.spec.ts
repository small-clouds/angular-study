import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGroupManagerComponent } from './work-group-manager.component';

describe('WorkGroupManagerComponent', () => {
  let component: WorkGroupManagerComponent;
  let fixture: ComponentFixture<WorkGroupManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGroupManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGroupManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
