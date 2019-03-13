import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFabriquatDialogComponent } from './update-fabriquat-dialog.component';

describe('UpdateFabriquatDialogComponent', () => {
  let component: UpdateFabriquatDialogComponent;
  let fixture: ComponentFixture<UpdateFabriquatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFabriquatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFabriquatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
