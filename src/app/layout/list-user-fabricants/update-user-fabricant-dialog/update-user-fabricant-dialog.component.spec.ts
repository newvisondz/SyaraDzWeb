import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserFabricantDialogComponent} from './update-user-fabricant-dialog.component';

describe('UpdateUserFabricantDialogComponent', () => {
  let component: UpdateUseFab;
  let fixture: ComponentFixture<UpdateFab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserFabricantDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserFabricantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
