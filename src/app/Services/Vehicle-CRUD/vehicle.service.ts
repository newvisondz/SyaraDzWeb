import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public create(mfid:string, mid : string, vid : string,body:object){

    interface Response {
      models: [];
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.post<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid+'/vehicles/',
    body,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));

  }

  public getDetails(mfid:string, mid : string, vid : string,cid : string){

    interface Response {
      type: any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid+'/vehicles/'+cid,{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public list(mfid:string, mid : string, vid : string){

    interface Response {
      models: [];
      count: any,
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid+'/vehicles/',{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public update(mfid : string, mid : string, vid : string,cid : string,body: any){
    
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    interface Response {
      type: any;
    }

    return this.http.put<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/models/'+mid+'/versions/'+vid+'/vehicles/'+cid,
    body, { headers: header }
    ).pipe(map(res => {
      return res;
    }));
  }


}
