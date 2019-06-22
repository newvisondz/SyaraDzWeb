import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AuthentificationService } from './authentification.service';
import { FabricantAdmin } from '../../model/fabricant-admin';

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

  it('should return the email & a token of the admin', () => {
    
    const dummyRes = {
      token: 'string',
    }
    
    service.login("test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should return the email & a token of the user', () => {
    
    const dummyRes = {
      token: 'string',
      email : 'string',
      id : 'string',
      type : 'string',
    }
    
    service.userLogin("test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should return the User/Admin infos', () => {
    
    const dummyRes = new FabricantAdmin('test','test','test','test','test','test',true,'test','test',);
    
    service.showMe().subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should update the Admin infos', () => {
    
    const dummyRes = {
      msg: 'string',
    }
    
    service.updateMe("test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

});
