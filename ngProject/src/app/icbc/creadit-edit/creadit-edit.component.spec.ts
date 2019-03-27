import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditEditComponent } from './creadit-edit.component';

describe('CreaditEditComponent', () => {
  let component: CreaditEditComponent;
  let fixture: ComponentFixture<CreaditEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaditEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
