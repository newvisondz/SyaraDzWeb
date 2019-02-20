import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifViewComponent } from './tarif-view.component';

describe('TarifViewComponent', () => {
  let component: TarifViewComponent;
  let fixture: ComponentFixture<TarifViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
