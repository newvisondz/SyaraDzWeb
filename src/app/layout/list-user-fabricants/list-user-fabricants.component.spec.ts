import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListUserFabricantsComponent } from './list-user-fabricants.component';
import { ListUserFabricantsModule } from './list-user-fabricants.module';

describe('ListUserFabricantsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TablesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListUserFabricantsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
