import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm: FormGroup;
  constructor() { 

    this.registerForm = new FormGroup({
      uname: new FormControl(),
      email: new FormControl(),
      male: new FormControl(),
      female: new FormControl(),
      other: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl(),
    })

  }

  onRegisterClick() {

      localStorage.setItem('registerForm', JSON.stringify(this.registerForm.value));
      console.log("counter:"+localStorage.getItem('registerForm'));
      alert("You have registred successfully")
    }
}
