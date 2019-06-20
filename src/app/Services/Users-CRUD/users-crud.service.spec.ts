import { TestBed } from '@angular/core/testing';

import { UsersCrudService } from './users-crud.service';

describe('UsersCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersCrudService = TestBed.get(UsersCrudService);
    expect(service).toBeTruthy();
  });
});
