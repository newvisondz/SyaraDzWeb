import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public create(mfid:string,body:FormData){

    interface Response {
      id : string;
      name : string;
      images : any;
      colors : any;
      options : any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.post<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/',body,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public getDetails(mfid:string, id : string){

    interface Response {
      id : string;
      name : string;
      images : any;
      colors : any;
      options : any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+id,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public list(mfid:string){

    interface Response {
      models: [];
      count: any,
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/',{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public update(mfid : string, id : string,body: any){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    interface Response {
      type: any;
    }

    return this.http.put<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+id,body, { headers: header }
    ).pipe(map(res => {
      return res;
    }));
  }

  public delete(manufacturerId:string,id : string ){
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    class ResponseError {
      error: boolean;
      msg : string;
    }

    return this.http.delete(this.ROOT_URL+"/manufacturers/"+manufacturerId+"/models/"+id,{
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
}
