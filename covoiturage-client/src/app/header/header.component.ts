import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user: User;
    constructor(private _router: Router, private _userService: UserService, private _authService: AuthService) { }

    ngOnInit() {
        this._authService.getMyInfo().subscribe(user => {
            this.user = user;
        });

        this._authService.eventUser.subscribe((user: User) => {
            console.log(user);
            this.user = user;
        });
    }

    logout() {
        this._authService.logout()
            .subscribe(data => {
                this._router.navigate(['/']);
            });
    }
}
