import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public create(mfid:string, id : string,body:object){

    interface Response {
      models: [];
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.post<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+id+'/versions/',body,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public getDetails(mfid:string, mid : string, vid : string){

    interface Response {
      type: any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public list(mfid:string, id : string){

    interface Response {
      models: [];
      count: any,
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+id+'/versions/',{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public update(mfid : string, mid : string, vid : string,body: any){
    
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    interface Response {
      type: any;
    }

    return this.http.put<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid,body, { headers: header }
    ).pipe(map(res => {
      return res;
    }));
  }


}
