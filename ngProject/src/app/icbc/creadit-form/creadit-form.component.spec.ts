import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditFormComponent } from './creadit-form.component';

describe('CreaditFormComponent', () => {
  let component: CreaditFormComponent;
  let fixture: ComponentFixture<CreaditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
