import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersCrudService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public create(mfid:string,email:string,password:string,firstName?:string,lastName?:string,address?:string,phone?:string){

    const headers = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    
    let body = { 
      email : email,
      password : password,
      firstName : firstName,
      lastName : lastName,
      address : address,
      phone : phone
    };

    console.log(body);
    return this.http.post(this.ROOT_URL+'/manufacturers/'+mfid+'/users/',body, { headers: headers }
    ).pipe(map(res => {
      return res;
    }));
  }

  public list(mfid:string){

    interface Response {
      manufacturer: {
        users : any;
      };
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/users/',{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public delete(mfid : string, id : number ){
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    
    class ResponseError {
      error: boolean;
      msg : string;
    }
    
    return this.http.delete(this.ROOT_URL+'/manufacturers/'+mfid+'/users/'+id,{
      headers: header}).pipe(map(res => {
        if(res instanceof ResponseError){
          const result = res as ResponseError;
          if(result.error){
            throw(result.msg);
          }
        }
      return res;
    }));
  }

  public update(mfid : string, id : number,body: any){
    
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    interface Response {
      type: any;
    }

    return this.http.put<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/users/'+id,body, { headers: header }
    ).pipe(map(res => {
      return res;
    }));
  }
}
