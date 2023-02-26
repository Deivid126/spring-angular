import { Component, OnInit } from '@angular/core';
import { Movimentacaos } from 'src/app/models/Movimentações';
import { ProdutoEdicao } from 'src/app/models/ProdutoEdição';
import { Produto } from 'src/app/models/Produtos';
import { MovimentacaoServiceService } from 'src/app/services/movimentacao-service.service';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';

@Component({
  selector: 'app-movimentacao-cadastro',
  templateUrl: './movimentacao-cadastro.component.html',
  styleUrls: ['./movimentacao-cadastro.component.css']
})
export class MovimentacaoCadastroComponent implements OnInit {

  produtos:ProdutoEdicao | any;
  Id:number;
  roleusuario:string
  constructor(private service: MovimentacaoServiceService, private serviceprod:ProdutosServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.serviceprod.getAllProdutos().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }

  OnId(id){
    this.Id = id;
  }

  verificarPermisao(role:string):boolean{
    this.roleusuario = localStorage.getItem('role');
    if( role == this.roleusuario){
      return true;
    }
     return false;
  }

  CreateMovimentacao(data:any){
    console.log(data);
    this.service.createMovimentacao(data,this.Id).subscribe(res=>{
      console.log(res);
    });
  }

}
