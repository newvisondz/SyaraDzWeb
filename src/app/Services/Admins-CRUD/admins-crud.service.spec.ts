import { TestBed } from '@angular/core/testing';

import { AdminsCrudService } from './admins-crud.service';

describe('AdminsCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminsCrudService = TestBed.get(AdminsCrudService);
    expect(service).toBeTruthy();
  });
});
