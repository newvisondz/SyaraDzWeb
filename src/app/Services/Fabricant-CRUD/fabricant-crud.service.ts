import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  
}
