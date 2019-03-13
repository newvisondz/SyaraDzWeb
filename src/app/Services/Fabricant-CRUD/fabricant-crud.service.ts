import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FabricantCRUDService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://sayara-dz.herokuapp.com';

  public create(marque:string){

    const headers = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.post(this.ROOT_URL+'/fabricant/model/',
    { marque: marque }, { headers: headers }
    ).pipe(map(res => {
      return res;
    }));
  }

  public list(){

    interface Response {
      fabricants: any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+"/fabricant/model",{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

  public listPage(page:number , perpage:number , sort:string= "asc" ){

    interface Response {
      fabricants: any;
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+"/fabricant/model",{
      headers: header,
      params: new HttpParams()
                .set('perpage', perpage.toString())
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
    return this.http.delete(this.ROOT_URL+"/fabricant/model/"+id,{
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
