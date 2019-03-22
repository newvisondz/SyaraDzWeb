import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService  {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = 'https://sayara-dz.herokuapp.com';

  public login(username:string,password:string){

    interface LoginResponse {
      email : string;
      id : string;
      token: string;
      type : string;
    }
    let data = {
      email : username,
      password : password,
    }

    return this.http.post<LoginResponse>(this.ROOT_URL+'/admins/login',
    data
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  public logout(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    this.http.delete(this.ROOT_URL+'/admins/logout',{
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

  public showMe(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    interface profileResponse {
      email : string;
      id : string;
      type : string;
    }
    return this.http.get<profileResponse>(this.ROOT_URL+'/me',
    { headers: header }
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}
