import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGroupFormComponent } from './work-group-form.component';

describe('WorkGroupFormComponent', () => {
  let component: WorkGroupFormComponent;
  let fixture: ComponentFixture<WorkGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
