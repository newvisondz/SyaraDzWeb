import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UsersCrudService } from './users-crud.service';

fdescribe('UsersCrudService', () => {
  
  let service: UsersCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersCrudService]
    });

    service = TestBed.get(UsersCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a User', () => {
    const dummyRes = {
      type: 'string',
    }
    
    service.create("test","test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should list the Users', () => {
    const dummyRes = {
      manufacturer: {
        users : [],
      },
    }
    
    service.list("test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should update the User', () => {
    const dummyRes = {
      type: 'test'
    }
    
    service.update("test",1,{}).subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should delete the User', () => {
    const dummyRes = {
      error: false,
      msg: 'test'
    }
    
    service.delete("test",1).subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });


});
