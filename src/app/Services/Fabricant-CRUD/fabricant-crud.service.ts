import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FabricantCRUDService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://sayara-dz.herokuapp.com';

  public create(){

    const headers = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    
    this.http.post(this.ROOT_URL+'/fabricant/model/',{
      marque: 'Toyota'
    },{headers: headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  public list(){
    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    this.http.get(this.ROOT_URL+"/fabricant/model",{
      headers: header
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
  
}
