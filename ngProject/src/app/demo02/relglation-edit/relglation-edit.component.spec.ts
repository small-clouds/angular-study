import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelglationEditComponent } from './relglation-edit.component';

describe('RelglationEditComponent', () => {
  let component: RelglationEditComponent;
  let fixture: ComponentFixture<RelglationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelglationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelglationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
