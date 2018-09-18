import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysProblemDetailComponent } from './sys-problem-detail.component';

describe('SysProblemDetailComponent', () => {
  let component: SysProblemDetailComponent;
  let fixture: ComponentFixture<SysProblemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysProblemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysProblemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
