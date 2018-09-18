import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerBannerBoxComponent } from './lecturer-banner-box.component';

describe('LecturerBannerBoxComponent', () => {
  let component: LecturerBannerBoxComponent;
  let fixture: ComponentFixture<LecturerBannerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerBannerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerBannerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
