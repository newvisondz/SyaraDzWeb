import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import { FabricantCRUDService } from './fabricant-crud.service';

describe('FabricantCRUDService', () => {
  let service: FabricantCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FabricantCRUDService]
    });

    service = TestBed.get(FabricantCRUDService);
  });

  it('should return a token', () => {
    const dummyRes = {
    }
  });
});
