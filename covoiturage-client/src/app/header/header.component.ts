import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { DialogOverviewComponent } from '../dialog/dialog-overview.component';

import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user: User;
    password: string;
    constructor(private _router: Router, private _userService: UserService, private _authService: AuthService, public dialog: MatDialog) { }

    ngOnInit() {
        this._authService.getMyInfo().subscribe(user => {
            this.user = user;
        });

        this._authService.eventUser.subscribe((user: User) => {
            this.user = user;
        });
    }

    logout() {
        this._authService.logout()
            .subscribe(data => {
                this._router.navigate(['/']);
            });
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '800px',
        });
    }
}
