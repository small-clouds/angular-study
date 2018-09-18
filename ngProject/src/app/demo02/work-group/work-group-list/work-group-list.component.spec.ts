import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGroupListComponent } from './work-group-list.component';

describe('WorkGroupListComponent', () => {
  let component: WorkGroupListComponent;
  let fixture: ComponentFixture<WorkGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
