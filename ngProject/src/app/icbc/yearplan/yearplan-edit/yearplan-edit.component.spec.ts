import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearplanEditComponent } from './yearplan-edit.component';

describe('YearplanEditComponent', () => {
  let component: YearplanEditComponent;
  let fixture: ComponentFixture<YearplanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearplanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearplanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
