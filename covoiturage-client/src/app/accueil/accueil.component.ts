import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  numberUsers = 0;
  constructor(private _route: Router, private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.getAllNumber().subscribe(resp => this.numberUsers = resp);
  }

  login() {
    this._route.navigate(['/login']);
  }

}
