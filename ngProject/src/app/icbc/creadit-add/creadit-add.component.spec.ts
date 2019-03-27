import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaditAddComponent } from './creadit-add.component';

describe('CreaditAddComponent', () => {
  let component: CreaditAddComponent;
  let fixture: ComponentFixture<CreaditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
