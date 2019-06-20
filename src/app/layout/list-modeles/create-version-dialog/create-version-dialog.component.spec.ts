import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVersionDialogComponent } from './create-version-dialog.component';

describe('CreateVersionDialogComponent', () => {
  let component: CreateVersionDialogComponent;
  let fixture: ComponentFixture<CreateVersionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVersionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVersionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
