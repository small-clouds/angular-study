import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProblemComponent } from './sys-problem.component';

describe('SysProblemComponent', () => {
  let component: SysProblemComponent;
  let fixture: ComponentFixture<SysProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
