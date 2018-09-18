import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysOptionComponent } from './sys-option.component';

describe('SysOptionComponent', () => {
  let component: SysOptionComponent;
  let fixture: ComponentFixture<SysOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
