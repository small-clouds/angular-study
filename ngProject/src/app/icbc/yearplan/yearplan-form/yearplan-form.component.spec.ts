import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearplanFormComponent } from './yearplan-form.component';

describe('YearplanFormComponent', () => {
  let component: YearplanFormComponent;
  let fixture: ComponentFixture<YearplanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearplanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearplanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
