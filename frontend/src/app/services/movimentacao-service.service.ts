import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoServiceService {
  url:string = environment.urlMovimentacao;
  token:string;
  movimentacao:any
  movimentacaocreate:any
  constructor(private http: HttpClient) { }
  


  listAllMovimentacao():Observable<any>{
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    this.movimentacao = this.http.get(`${this.url}/all`,{headers:headers})

    return this.movimentacao;
  }

  createMovimentacao(data:any,id:number):Observable<any>{
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    this.movimentacaocreate = this.http.post(`${this.url}/${id.toString()}`,data,{headers:headers});
    return this.movimentacaocreate;
  }
}
