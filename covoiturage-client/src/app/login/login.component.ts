import { Component, OnInit, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  loginForm: FormGroup;

  error: string;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    //VALIDATORS FOR SIGNIN
    this.signinForm = this._fb.group({
      email:['',],
      username:['',],
      password:['',],
      passwordConfirm:['',]
    }, { });

    //VALIDATORS FOR LOGIN
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSigninSubmit(user) {
  }

  onLoginSubmit(user) {
    this.error = null;
  }

  debug(signInForm) {
    console.log(signInForm)
  }
}
