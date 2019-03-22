import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardUserComponent } from './display-card-user.component';

describe('DisplayCardUserComponent', () => {
  let component: DisplayCardUserComponent;
  let fixture: ComponentFixture<DisplayCardUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCardUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
