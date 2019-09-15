import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListCommandesComponent } from './list-commandes.component';
import { ListCommandesModule } from './list-commandes.module';

describe('ListCommandesModuleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ListCommandesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListCommandesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
