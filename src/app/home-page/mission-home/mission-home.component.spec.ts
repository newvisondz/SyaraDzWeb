import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionHomeComponent } from './mission-home.component';

describe('MissionHomeComponent', () => {
  let component: MissionHomeComponent;
  let fixture: ComponentFixture<MissionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
