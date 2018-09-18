import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGroupAddComponent } from './work-group-add.component';

describe('WorkGroupAddComponent', () => {
  let component: WorkGroupAddComponent;
  let fixture: ComponentFixture<WorkGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
