import { Injectable, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs/Observable';
import { User, AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';

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

    resetCredentials() {
        return this.apiService.get(this.config.reset_credentials_url);
    }

    getAll() {
        return this.apiService.get(this.config.users_url);
    }

    getAllNumber() {
        return this.apiService.get(this.config.all_number_url);
    }

}
