import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearplanAddComponent } from './yearplan-add.component';

describe('YearplanAddComponent', () => {
  let component: YearplanAddComponent;
  let fixture: ComponentFixture<YearplanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearplanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearplanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
