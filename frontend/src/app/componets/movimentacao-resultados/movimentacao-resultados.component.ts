import { Component, OnInit } from '@angular/core';
import { MovimentacaoServiceService } from 'src/app/services/movimentacao-service.service';

@Component({
  selector: 'app-movimentacao-resultados',
  templateUrl: './movimentacao-resultados.component.html',
  styleUrls: ['./movimentacao-resultados.component.css']
})
export class MovimentacaoResultadosComponent implements OnInit {

  movimentacao:any;
  constructor(private service: MovimentacaoServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

getAll(){
  this.service.listAllMovimentacao().subscribe(res => {
    console.log(res);
  })
}
}
