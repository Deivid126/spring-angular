import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { requestLogin } from '../models/RequestLogin';
import { responseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  response: responseLogin | any;
  constructor(private http:HttpClient) {}

  token:string = "";
  
  
  login(data:requestLogin):Observable<responseLogin>{
    this.response =  this.http.post("http://localhost:8081/server/auth/registrar",data); 

    return this.response;
  }
}
