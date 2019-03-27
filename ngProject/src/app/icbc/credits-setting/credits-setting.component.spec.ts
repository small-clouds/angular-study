import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsSettingComponent } from './credits-setting.component';

describe('CreditsSettingComponent', () => {
  let component: CreditsSettingComponent;
  let fixture: ComponentFixture<CreditsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
