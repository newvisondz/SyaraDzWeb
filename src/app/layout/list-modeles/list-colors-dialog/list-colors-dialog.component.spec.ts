import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColorsDialogComponent } from './list-colors-dialog.component';

describe('ListColorsDialogComponent', () => {
  let component: ListColorsDialogComponent;
  let fixture: ComponentFixture<ListColorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListColorsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
