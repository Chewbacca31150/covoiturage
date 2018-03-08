import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  constructor(private _router: Router, private _userService: UserService, private _authService: AuthService) { }

  ngOnInit() {
    this._userService.eventUser.subscribe(data => {
        this.user = (data) ? data : null;
    });
    this._userService.sendEvent();
  }
  logout()
  {
    this._authService.logout()
    .subscribe(data => {
        this._userService.sendEvent();
        this._router.navigate(['/']);
    });
  }

  

}
