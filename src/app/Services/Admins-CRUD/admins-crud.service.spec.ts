import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AdminsCrudService } from './admins-crud.service';

fdescribe('AdminsCrudService', () => {
  let service: AdminsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdminsCrudService]
    });

    service = TestBed.get(AdminsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an Admin', () => {
    const dummyRes = {
      type: 'string',
    }
    
    service.create("test","test","test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should list the Admins', () => {
    const dummyRes = {
      manufacturer: [],
    }
    
    service.list("test").subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should update the Admin', () => {
    const dummyRes = {
      type: 'test'
    }
    
    service.update("test",1,{}).subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });

  it('should delete the Admin', () => {
    const dummyRes = {
      error: false,
      msg: 'test'
    }
    
    service.delete("test",1).subscribe(res => {
      expect(res).toEqual(dummyRes);
    });

  });


});
