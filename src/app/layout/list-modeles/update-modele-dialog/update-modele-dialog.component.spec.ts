import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModeleDialogComponent } from './update-modeles-dialog.component';

describe('UpdateModeleDialogComponent', () => {
  let component: UpdateModeleDialogComponent;
  let fixture: ComponentFixture<UpdateModeleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatmodetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModeleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
