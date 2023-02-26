import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  constructor(private http:HttpClient) { }
  produto: Produto | any
  token:string = "";
  url:string = environment.urlProdutos;

  cadastrarProduto(data:Produto):Observable<Produto> {
    this.produto = data;
    console.log(this.produto)
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    this.produto = this.http.post(this.url,this.produto,{headers:headers})

    return this.produto;
  }

}
