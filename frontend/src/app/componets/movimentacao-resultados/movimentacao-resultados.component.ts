import { Component, OnInit } from '@angular/core';
import { Movimentacaos } from 'src/app/models/Movimentações';
import { Produto } from 'src/app/models/Produtos';
import { MovimentacaoServiceService } from 'src/app/services/movimentacao-service.service';
import { ProdutosServiceService } from 'src/app/services/produtos-service.service';

@Component({
  selector: 'app-movimentacao-resultados',
  templateUrl: './movimentacao-resultados.component.html',
  styleUrls: ['./movimentacao-resultados.component.css']
})
export class MovimentacaoResultadosComponent implements OnInit {
 
  movimentacaos: Movimentacaos | any = [];
  produtos: Produto | any = [];
  saldo:Array<any> = []
  saldoTotal:number = 0;
  saldo_inicial: number = 0;
  entradas:number = 0;
  ajustes_entrada:number = 0;
  saidas:number = 0;
  ajuste_saida:number = 0;
  contador:number = 0;
  constructor(private service: MovimentacaoServiceService, private serviceproduto: ProdutosServiceService) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }

getAllProdutos(){
  this.service.listAllMovimentacao().subscribe(res => {
    this.movimentacaos = res;
  });
  this.serviceproduto.getAllProdutos().subscribe(res => {

        res.map(produto => {
        if(produto.nome == this.movimentacaos[this.contador].nome_produto)
        {
          if(this.movimentacaos[this.contador].tipo_de_movimentacao == "SALDO_INICIAL")
          {
            this.saldo_inicial = produto.saldo_inicial;
          }
          if(this.movimentacaos[this.contador].tipo_de_movimentacao == "ENTRADA")
          {
            this.entradas = this.movimentacaos[this.contador].quantidade;
            console.log(this.entradas);
          }
          if(this.movimentacaos[this.contador].tipo_de_movimentacao == "AJUSTE_ENTRADA")
          {
            this.ajustes_entrada = this.movimentacaos[this.contador].quantidade;
          }
          if(this.movimentacaos[this.contador].tipo_de_movimentacao == "SAIDA")
          {
            this.saidas = this.movimentacaos[this.contador].quantidade;
          }
          if(this.movimentacaos[this.contador].tipo_de_movimentacao == "AJUSTE_SAIDA")
          {
            this.ajuste_saida = this.movimentacaos[this.contador].quantidade;
          }

          this.saldoTotal = this.saldo_inicial + this.entradas + this.ajustes_entrada - this.ajuste_saida -this.saidas;
          this.saldo.push(this.saldoTotal);
          this.contador++;
        }
      })
      for(let i:number = 0;i < this.movimentacaos.length;i++)
      {
        let data_america:string = this.movimentacaos[i].data.split('T');
        let data_correta = data_america[0].split('-').reverse().join('/');
        this.movimentacaos[i].data = data_correta;
        this.movimentacaos[i].saldo = this.saldo[i];
        console.log(this.saldo[i]) 
      }
  })
}


}
