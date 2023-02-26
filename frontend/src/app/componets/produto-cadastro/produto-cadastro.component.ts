import { Component, OnInit } from '@angular/core';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  constructor( private service:ProdutosServiceService) { }

  ngOnInit(): void {
  }

  createProduto(data:any){
    console.log(data.value)
    this.service.cadastrarProduto(data.value).subscribe(res => {
      console.log(res);
    })
  }

}
