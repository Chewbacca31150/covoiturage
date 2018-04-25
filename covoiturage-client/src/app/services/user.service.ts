import { Injectable, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {


    constructor(private apiService: ApiService, private authService: AuthService, private config: ConfigService) {
    }


    removeUser(password): Observable<User> {
        return this.apiService
            .post(this.config.delete_user_url, { username: this.authService.currentUser.username, password: password })
            .map((user: User) => {
                this.authService.getMyInfo().subscribe();
                return user;
            });
    }

    saveUser(user: User) {
        return this.apiService.post(this.config.save_user_url, JSON.stringify(user)).map(response => console.log(response));
    }

    getOne(id: number): Observable<User> {
        return this.apiService.get<User>(this.config.user_url + '/' + id).map((response) => {
          return response;
        });
    }

    resetCredentials() {
        return this.apiService.get(this.config.reset_credentials_url);
    }

    getAll() {
        return this.apiService.get(this.config.users_url);
    }

    getAllNumber() {
        return this.apiService.get<number>(this.config.all_number_url);
    }

}
