import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  roleusuario:string;
  role:string = "";
  constructor() { }

  ngOnInit(): void {
    
  }
  verificarPermisao(role:string):boolean{
    this.roleusuario = localStorage.getItem('role');
    if( role == this.roleusuario){
      return true;
    }
     return false;
  }

}
