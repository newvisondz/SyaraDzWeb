import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModeleDialogComponent } from './create-modele-dialog.component';

describe('CreateModeleDialogComponent', () => {
  let component: CreateModeleDialogComponent;
  let fixture: ComponentFixture<CreateModeleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModeleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModeleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
