import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationAddComponent } from './regulation-add.component';

describe('RegulationAddComponent', () => {
  let component: RegulationAddComponent;
  let fixture: ComponentFixture<RegulationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
