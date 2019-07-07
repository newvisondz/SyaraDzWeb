import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOptionsDialogComponent } from './list-options-dialog.component';

describe('ListOptionsDialogComponent', () => {
  let component: ListOptionsDialogComponent;
  let fixture: ComponentFixture<ListOptionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOptionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
