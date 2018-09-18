import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysOpinionComponent } from './sys-opinion.component';

describe('SysOpinionComponent', () => {
  let component: SysOpinionComponent;
  let fixture: ComponentFixture<SysOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
