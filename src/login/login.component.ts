import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _router: Router) { }
  userLogin:any;
  status: string;
  statusMessage="";

  onLoginClick(loginForm) {
    let email=loginForm.email;
    let password=loginForm.password;
  this.userLogin = JSON.parse(localStorage.getItem('registerForm') );
   if(email===this.userLogin.email && password === this.userLogin.password){
     this._router.navigate(['home']);
   }else{
     this.statusMessage="Invalid credintials";
     alert(this.statusMessage);
   }
}
}