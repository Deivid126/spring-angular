import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProdutoEdicao } from '../models/ProdutoEdição';
import { Produto } from '../models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  constructor(private http:HttpClient) { }
  produto: Produto | any
  produtoEdit: ProdutoEdicao | any
  produtos: Array<ProdutoEdicao> | any
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

  getAllProdutos():Observable<Array<ProdutoEdicao>>{
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    this.produtos = this.http.get(this.url,{headers:headers})
     
    return this.produtos;
  }

  findProdutobyId(id:number):Observable<Produto>{
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    this.produtoEdit = this.http.get(`${this.url}/${id}`,{headers:headers});

    return this.produtoEdit;

  }

}
