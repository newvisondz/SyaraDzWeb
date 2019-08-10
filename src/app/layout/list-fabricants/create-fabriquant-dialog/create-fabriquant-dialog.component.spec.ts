import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFabriquantDialogComponent } from './create-fabriquant-dialog.component';

describe('CreateFabriquantDialogComponent', () => {
  let component: CreateFabriquantDialogComponent;
  let fixture: ComponentFixture<CreateFabriquantDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFabriquantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFabriquantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
