import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFabricantDialogComponent } from './contract-fabricant-dialog.component';

describe('ContractFabricantDialogComponent', () => {
  let component: ContractFabricantDialogComponent;
  let fixture: ComponentFixture<ContractFabricantDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFabricantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFabricantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
