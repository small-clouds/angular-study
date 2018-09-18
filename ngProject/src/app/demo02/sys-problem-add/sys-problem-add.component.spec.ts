import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProblemAddComponent } from './sys-problem-add.component';

describe('SysProblemAddComponent', () => {
  let component: SysProblemAddComponent;
  let fixture: ComponentFixture<SysProblemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProblemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProblemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
