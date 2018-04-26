import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { DialogOverviewComponent } from '../dialog/dialog-overview.component';

import { Router } from '@angular/router';
import { User } from '../models/user';
import { NotificationService, NotificationDto } from '../services/notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


    notifications: NotificationDto[];
    interval: number;
    user: User;
    password: string;
    constructor(private _router: Router, private _userService: UserService, private _authService: AuthService, public dialog: MatDialog, private notif : NotificationService) { }

    ngOnInit() {
        this._authService.getMyInfo().subscribe(user => {
            this.user = user;
        });

        this._authService.eventUser.subscribe((user: User) => {
            this.user = user;
        });
        this.interval = setInterval(this.notificationLoad.bind(this), 10000);
        this.notificationLoad();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    notificationLoad()
    {
        this.notif.get().subscribe(e => console.log(this.notifications = e));
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
    open(notif: NotificationDto) {
        this.notif.delete(notif).subscribe(e => {
            this.notificationLoad();
            this._router.navigate(['/contact', notif.trajetId]);
        })
    }
}
