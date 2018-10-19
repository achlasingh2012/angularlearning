
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginUser:any;
  constructor() { }
  ngOnInit() {
    this.loginUser =JSON.parse(localStorage.getItem('registerForm'));
  }
  onClick(){
    console.log("logindetails" + this.loginUser.email);
  }

}
