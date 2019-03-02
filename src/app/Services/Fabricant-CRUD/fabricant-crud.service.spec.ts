import { TestBed } from '@angular/core/testing';

import { FabricantCRUDService } from './fabricant-crud.service';

describe('FabricantCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricantCRUDService = TestBed.get(FabricantCRUDService);
    expect(service).toBeTruthy();
  });
});
