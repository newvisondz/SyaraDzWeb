import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fabricant} from '../../model/fabricant.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor(private http:HttpClient) { }

  readonly ROOT_URL = environment.baseUrl;

  public list(mfid:string){

    interface Response {
      commands: [],
    }

    const header = new HttpHeaders({'Authorization':localStorage.getItem('accesToken')});

    return this.http.get<Response>(this.ROOT_URL+'/manufacturers/'+mfid+'/commands/',{
      headers: header
    }).pipe(map(res => {
      return res;
    }));
  }

}
