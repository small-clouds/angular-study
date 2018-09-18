import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProblemFormComponent } from './sys-problem-form.component';

describe('SysProblemFormComponent', () => {
  let component: SysProblemFormComponent;
  let fixture: ComponentFixture<SysProblemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProblemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProblemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
