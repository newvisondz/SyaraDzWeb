import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService  {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'http://sayara-dz.herokuapp.com';

  public login(username:string,password:string){

    interface LoginResponse {
      token: string;
    }
    let data = {
      email : username,
      password : password
    }

    return this.http.post<LoginResponse>(this.ROOT_URL+'/admin/login',
    data
    ).pipe(map(res => {
      return res;
    }));
  }

  public logout(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    this.http.delete(this.ROOT_URL+'/admin/logout',{
      headers: header
    }).subscribe(
      res => {
        console.log(res);
        window.localStorage.setItem("accesToken", "");
      },
      err => {
        console.log(err);
      }
    );
  }
  
}
