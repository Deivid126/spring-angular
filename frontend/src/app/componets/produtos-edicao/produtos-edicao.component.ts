import { Component, OnInit } from '@angular/core';
import { ProdutoEdicao } from 'src/app/models/ProdutoEdição';
import { Produto } from 'src/app/models/Produtos';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';

@Component({
  selector: 'app-produtos-edicao',
  templateUrl: './produtos-edicao.component.html',
  styleUrls: ['./produtos-edicao.component.css']
})
export class ProdutosEdicaoComponent implements OnInit {

  produtoEdit: ProdutoEdicao | any
  produtos: Array<ProdutoEdicao> | any
  constructor(private service:ProdutosServiceService) { }

  ngOnInit(): void {
    this.findAllProduts();
  }

  findAllProduts(){
    this.service.getAllProdutos().subscribe(res => {
      console.log(res);
      this.produtos = res;
    });
  }
  FindProduto(id:number){
    this.service.findProdutobyId(id).subscribe(res=>{
      console.log(res);
      this.produtoEdit = res;
      console.log(this.produtoEdit);
    })
  }

}
