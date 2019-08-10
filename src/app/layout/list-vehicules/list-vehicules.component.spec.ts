import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListFabricantsComponent } from './list-fabricants.component';
import { ListFabricantsModule } from './list-fabricants.module';

describe('ListFabricantsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TablesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListFabricantsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
