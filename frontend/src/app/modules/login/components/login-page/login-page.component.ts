import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {split} from 'ts-node';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private  formbuilder: FormBuilder) {
  }

  hide = true;

  sendLoginData(): void {
    const loginMode = {
      username: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };
    this.authService.login(loginMode)
      .subscribe((data: Token) => {
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['home']);
      });
  }

  getErrorMessage() {
  }

  ngOnInit(): void {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZW5pc2thQG1haWwucnUiLCJzY29wZXMiOiJST0xFX1BST0pFQ1RfTUFOQUdFUiIsImlkIjoiMzYiLCJpYXQiOjE1NzQ1NTY0MzIsImV4cCI6MTU3NDU3NDQzMn0.x0Fkqyxje2IuRPIkf57ULWtfwP_jDaf-PrUrhyPK1TY';
    let strings = token.split('.');
    const payload = JSON.parse(atob(strings[1]));
    const email = payload.sub;
    const role = payload.scopes;
    const id = payload.id;
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.required]]
    });
  }
}
