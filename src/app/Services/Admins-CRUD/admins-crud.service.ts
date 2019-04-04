import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminsCrudService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'https://sayara-dz.herokuapp.com';

  public create(mfid:string,email:string,password:string,firstName?:string,lastName?:string,address?:string,phone?:string){

    const headers = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    
    let body = { 
      email : email,
      password : password,
      firstName : firstName,
      lastName : lastName,
      phone : phone,
      address : address
    };

    interface Response {
      type: any;
    }

    return this.http.post<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/admins/',body, { headers: headers }
    ).pipe(map(res => {
      return res;
    }));
  }

  public list(mfid:string){

    interface Response {
      manufacturer: any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/admins/',{
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
    
    return this.http.delete(this.ROOT_URL+'/manufacturers/'+mfid+'/admins/'+id,{
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

  public update(){
    // We need the view
  }
}