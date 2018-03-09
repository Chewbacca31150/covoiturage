import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dialog-overview',
    templateUrl: './dialog-overview.component.html',
    styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent {
    error = '';
    password = '';
    constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>, private _router: Router, private _userService: UserService) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
    removeAccount() {
        this.error = '';
        this._userService.removeUser(this.password)
            .subscribe((resp) => {
                this.dialogRef.close();
                this._router.navigate(['/']);
            }, (err) => { this.error = 'incorrect password'; });
    }

}
