import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.interface';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService,
  ) { }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `username=${user.username}&password=${user.password}`;
    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    document.cookie = `username=${user.username}; expires=`+ d.toUTCString();
    return this.apiService.post(this.config.login_url, body, loginHeaders).map(() => {
      console.log('Login success');
      this.userService.getMyInfo().subscribe();
    });
  }

  signup(user) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders).map(() => {
      console.log('Sign up success');
    });
  }

  logout() {
    return this.apiService.post(this.config.logout_url, {})
      .map(() => {
        this.userService.currentUser = null;
        document.cookie = 'username=; expires=Fri, 01 Jan 2010 00:0:00 UTC;';
        console.log('Logout success');
      });
  }

  changePassowrd(passwordChanger) {
    return this.apiService.post(this.config.change_password_url, passwordChanger);
  }

}
