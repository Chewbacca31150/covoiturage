import { Component, OnInit, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  loginForm: FormGroup;

  error: string;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _userService: UserService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    // VALIDATORS FOR SIGNIN
    this.signinForm = this._fb.group({
      email: [''],
      username: [''],
      password: [''],
      passwordConfirm: ['']
    }, {});

    // VALIDATORS FOR LOGIN
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSigninSubmit(form) {
    this._authService.signup(form)
      .subscribe(resp => {
        this._authService.login(form).subscribe(data => {
          this._userService.getMyInfo().subscribe();
        });
      });
  }

  onLoginSubmit(form) {
    this._authService.login(form)
      .subscribe(data => {
        this._userService.getMyInfo().subscribe(() => {
          this._userService.sendEvent();
          this._router.navigate(['/map']);
        });
      });
    this.error = null;

  }

  debug(signInForm) {
    console.log(signInForm);
  }
}
