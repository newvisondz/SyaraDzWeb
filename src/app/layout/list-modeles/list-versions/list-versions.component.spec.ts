import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListVersionsComponent } from './list-versions.component';
import { ListVersionsModule } from './list-versions.module';

describe('ListVersionsModuleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ListVersionsModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ListVersionsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
