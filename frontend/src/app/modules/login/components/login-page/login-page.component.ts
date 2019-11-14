import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor() {
  }

  email = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]);
  hide = true;

  getErrorMessage() {
    // return this.email.hasError('required') ? 'You must enter a value' :
    //   this.email.hasError('email') ? 'Not a valid email' :
    //     ''; переделать не делать тернарный оператор в тернарном операторе
  }
}
