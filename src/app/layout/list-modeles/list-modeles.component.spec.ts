import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListModelesComponent } from './list-modeles.component';
import { ListModelesModule } from './list-modeles.module';

describe('ListModelesModuleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ListModelesModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListModelesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
