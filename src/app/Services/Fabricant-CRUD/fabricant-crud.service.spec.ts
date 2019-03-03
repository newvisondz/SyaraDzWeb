import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController,RequestMatch } from '@angular/common/http/testing'
import { FabricantCRUDService } from './fabricant-crud.service';

fdescribe('FabricantCRUDService', () => {

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

  afterEach(() => {
    httptest.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have create() function', () => {
    expect(service.create).toBeTruthy();
  });

  it('should have list() function', () => {
    expect(service.list).toBeTruthy();
  });

  it('create() should create a new object of type "Fabricant"', () => {
    
    const dummyRes = {
      id : "1",
      marque : "test"
    }

    let response:any ;
    
    service.create("test").subscribe(res => {
      response = res;
    });

    const req = httptest.expectOne({ method: "POST" });
    req.flush(dummyRes);

    expect(response).toEqual(dummyRes);

  });

  it('list() should return an array of models', () => {
    
    const dummyRes = [
      {
        createdOn: "2019-02-26T17:11:01.673Z",
        id : "1",
        marque : "Audi"
      },
      {
        createdOn: "2019-01-26",
        id : "5c75732560ebf70024f3c4a3",
        marque : "Toyota"
      }
    ]

    let response:any ;

    service.list().subscribe(res => {
      response = res;
    });

    const req = httptest.expectOne('http://sayara-dz.herokuapp.com/fabricant/model');
    req.flush(dummyRes);

    expect(response).toEqual(dummyRes);

  });
});
