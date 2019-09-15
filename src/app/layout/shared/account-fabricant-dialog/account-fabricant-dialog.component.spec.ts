import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFabricantDialogComponent } from './account-fabricant-dialog.component';

describe('AccountFabricantDialogComponent', () => {
  let component: AccountFabricantDialogComponent;
  let fixture: ComponentFixture<AccountFabricantDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFabricantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFabricantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
