import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '../models/user';

export interface Login {
    password: string;
    username: string;
}

export interface AuthResult {
    access_token: string;
    expires_in: number;
}

export interface SignUp {
    email: string;
    password: string;
    passwordConfirm: string;
    username: string;
}

@Injectable()
export class AuthService {

    currentUser: User;
    eventUser: EventEmitter<User>;

    constructor(
        private apiService: ApiService,
        private config: ConfigService,
    ) {
        this.eventUser = new EventEmitter();
    }

    login(user: Login) {
        const loginHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        const body = `username=${user.username}&password=${user.password}`;

        return this.apiService.post(this.config.login_url, body, loginHeaders).map((result: AuthResult) => {
            if (result && result.access_token && result.expires_in) {
                console.log('Login success');

                // add cookie auth
                const d = new Date();
                d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
                document.cookie = `username=${user.username}; expires=${d.toUTCString()}`;
            }

            this.getMyInfo().subscribe();
        });
    }

    signup(user: SignUp) {
        const signupHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders).map((response) => {
            console.log(response);

            console.log('Sign up success');
        });
    }

    logout() {
        return this.apiService.post(this.config.logout_url, {})
            .map(() => {
                this.currentUser = null;
                document.cookie = 'username=; expires=Fri, 01 Jan 2010 00:0:00 UTC;';
                console.log('Logout success');
                this.getMyInfo().subscribe();
            });
    }

    changePassowrd(passwordChanger) {
        return this.apiService.post(this.config.change_password_url, passwordChanger);
    }

    isLogin(): Observable<boolean> {
        return this.getMyInfo().map((user: User) => {
            if (user && user.id) {
                return true;
            }
            return false;
        });
    }

    getMyInfo(): Observable<User> {
        return this.apiService.get(this.config.whoami_url).map((user: User) => {
            return this.sendEvent(user);
        }).catch<User, User>((e) => {
            // console.log('err');
            this.sendEvent(null);
            return Observable.of<User>(null);
        });
    }

    sendEvent(user: User) {
        this.currentUser = user;
        this.eventUser.emit(user);
        return user;
    }

}
