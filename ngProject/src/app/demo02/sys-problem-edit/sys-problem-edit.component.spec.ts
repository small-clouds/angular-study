import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProblemEditComponent } from './sys-problem-edit.component';

describe('SysProblemEditComponent', () => {
  let component: SysProblemEditComponent;
  let fixture: ComponentFixture<SysProblemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProblemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProblemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
