import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFileComponent } from './validate-file.component';

describe('ValidateFileComponent', () => {
  let component: ValidateFileComponent;
  let fixture: ComponentFixture<ValidateFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
