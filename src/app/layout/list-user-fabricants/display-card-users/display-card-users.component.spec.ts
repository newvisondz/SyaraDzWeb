import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardUsersComponent } from './display-card-users.component';

describe('DisplayCardUsersComponent', () => {
  let component: DisplayCardUsersComponent;
  let fixture: ComponentFixture<DisplayCardUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCardUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
