import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private auth: AuthService
    ) { }

  login() {
    if(this.email.value && this.password.value){
      this.auth.signInWithEmailPassword(this.email.value, this.password.value);
    }
  }

  signup(){
    if(this.email.value && this.password.value){
      this.auth.signUpWithEmailPassword(this.email.value, this.password.value);
    }
  }

  loginWithGoogle(){
    this.auth.signInWithGoogle();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
