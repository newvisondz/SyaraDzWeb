import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController,RequestMatch } from '@angular/common/http/testing'
import { FabricantCRUDService } from './fabricant-crud.service';

describe('FabricantCRUDService', () => {

  let service: FabricantCRUDService;
  let httptest: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FabricantCRUDService]
    });

    service = TestBed.get(FabricantCRUDService);
    httptest = TestBed.get(HttpTestingController);
  });
});
