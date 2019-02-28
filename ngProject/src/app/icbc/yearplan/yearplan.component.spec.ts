import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearplanComponent } from './yearplan.component';

describe('YearplanComponent', () => {
  let component: YearplanComponent;
  let fixture: ComponentFixture<YearplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
