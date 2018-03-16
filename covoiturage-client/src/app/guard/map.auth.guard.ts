import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MapAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if(this.authService.currentUser) {
            this.router.navigate(['/map']);
            return false; 
        }
        return true;
    }
}
