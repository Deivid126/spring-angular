import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) {}

  token:string = "";
  
  response:{
    email:string,
    password:string,
    role:string
  }

  login(data:any){
    this.http.post("http://localhost:8081/server/auth/registrar",data).subscribe(res => {
      console.log(res);
    })    
  }
}
