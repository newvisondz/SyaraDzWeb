import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fabricant} from '../../model/fabricant.model';
import { environment } from '../../../environments/environment';

interface Response {
  manufacturers: Observable<Fabricant>[],
  count : number
}

@Injectable({
  providedIn: 'root'
})

export class FabricantCRUDService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public create(marque:string){

    const headers = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    let body = { brand : marque };
    console.log(body);
    return this.http.post(this.ROOT_URL+'/manufacturers',body, { headers: headers }
    ).pipe(map(res => {
      return res;
    }));
  }

  public list(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+"/manufacturers",{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public listPage(page:number , perpage:number , sort:string= "+" ){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+"/manufacturers",{
      headers: header,
      params: new HttpParams()
                .set('limit', perpage.toString())
                .set('page', page.toString())
                .set('sort', sort)
    }).pipe(map(res => {
      return res;
    }));
  }

  public delete(id : number ){
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    class ResponseError {
      error: boolean;
      msg : string;
    }
    return this.http.delete(this.ROOT_URL+"/manufacturers/"+id,{
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

  public update(id : number , brand: string){
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    class ResponseError {
      error: boolean;
      msg : string;
    }
    let body = {brand : brand};
    return this.http.put(this.ROOT_URL+"/manufacturers/"+id,body,{
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
