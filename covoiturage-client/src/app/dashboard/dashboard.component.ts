import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
import { DialogOverviewComponent } from '../dialog/dialog-overview.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  password: string;
  constructor(public dialog: MatDialog, private _userService: UserService) { }

  ngOnInit() {
  }

  removeUser() {
    this._userService.removeUser(this._userService.getMyInfo(), '');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
