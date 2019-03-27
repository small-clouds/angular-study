import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsManagerComponent } from './credits-manager.component';

describe('CreditsManagerComponent', () => {
  let component: CreditsManagerComponent;
  let fixture: ComponentFixture<CreditsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
