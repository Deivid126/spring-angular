import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  loginForm: FormGroup;

  emailset:string;
  passwordset:string;
  roleset:string;
  
  
  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit() {
    
  }

 


   onSubmit(data:any) {
      if(data.role.toString() == "GERENTE")
      {
        this.service.login(data);
        this.router.navigate(['/app-produto-cadastro']);
      }
      if(data.role.toString() =="OPERADOR")
      {
        this.service.login(data);
        this.router.navigate(['/app-produto-cadastro']);
      }      
  }
}
