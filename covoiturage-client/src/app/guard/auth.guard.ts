import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(): boolean {
        if (this.userService.currentUser) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}