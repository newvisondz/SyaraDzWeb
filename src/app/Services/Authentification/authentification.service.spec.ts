import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthentificationService } from './authentification.service';

fdescribe('AuthentificationService', () => {
  let service: AuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthentificationService]
    });

    service = TestBed.get(AuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the email & a token', () => {
    
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
    
    service.login("test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

});
