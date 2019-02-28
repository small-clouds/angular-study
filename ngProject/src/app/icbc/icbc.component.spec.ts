import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcbcComponent } from './icbc.component';

describe('IcbcComponent', () => {
  let component: IcbcComponent;
  let fixture: ComponentFixture<IcbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
