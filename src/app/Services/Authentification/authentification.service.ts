import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Admin } from '../../model/admin.model';
import { FabricantAdmin } from '../../model/fabricant-admin';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService  {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public login(username:string,password:string){

    interface LoginResponse {
      token: string;
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
        window.localStorage.setItem("isSuperAdmin", "");
      },
      err => {
        console.log(err);
      }
    );
  }

  public showMe(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    interface Response {
      manufacturer: any;
    }
    
    return this.http.get<FabricantAdmin>(this.ROOT_URL+'/me',
    { headers: header }
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  
  public updateMe(email:string, password:string){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});
    let body = {email : email, password:password};
    return this.http.put(this.ROOT_URL+'/admins/me',body,
    { headers: header }
    ).pipe(map(res => {
      return res;
    }));
  }

  public userLogin(username:string,password:string){

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

    return this.http.post<LoginResponse>(this.ROOT_URL+'/manufacturers/login',
    data
    ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  public userLogout(){

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    this.http.delete(this.ROOT_URL+'/manufacturers/logout',{
      headers: header
    }).subscribe(
      res => {
        console.log(res);
        window.localStorage.setItem("accesToken", "");
        window.localStorage.setItem("isAdmin", "");
      },
      err => {
        console.log(err);
      }
    );
  }

}


