import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { requestLogin } from 'src/app/models/RequestLogin';
import { responseLogin } from 'src/app/models/ResponseLogin';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:LoginServiceService, private router:Router) { }

  response: responseLogin | any
  request: requestLogin

  ngOnInit(): void {
  }

  onSubmit(data:any) {

    this.request = data;

      this.service.login(this.request).subscribe((res) => {
        this.response = res;
        localStorage.setItem(this.response.token, this.response.role);
      });
      this.router.navigate(['/home']);
}

}
