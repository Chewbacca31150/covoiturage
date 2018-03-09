import { Injectable, EventEmitter } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

    currentUser;
    eventUser: EventEmitter<any>;

    constructor(private apiService: ApiService, private config: ConfigService) {
        this.eventUser = new EventEmitter();
    }

    isLogin() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const regSepCookie = new RegExp('^username=(.*)$', 'gi');
            if (regSepCookie.test(cookie)) {
                return true;
            }
        }
        return false;
    }

    sendEvent() {
        this.eventUser.emit(this.isLogin());
    }

    initUser() {
        const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
            .then(res => {
                if (res.access_token !== null) {
                    return this.getMyInfo().toPromise()
                        .then(user => {
                            this.currentUser = user;
                        });
                }
            })
            .catch(() => null);
        return promise;
    }

    removeUser(user, password) {
        return this.apiService.post(this.config.delete_user, { user: user, password: password });
    }

    resetCredentials() {
        return this.apiService.get(this.config.reset_credentials_url);
    }

    getMyInfo() {
        return this.apiService.get(this.config.whoami_url).map(user => this.currentUser = user);
    }

    getAll() {
        return this.apiService.get(this.config.users_url);
    }

}
