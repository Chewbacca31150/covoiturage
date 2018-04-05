import { Component, OnInit } from '@angular/core';
import { Trajet } from '../models/trajet';
import { AuthService } from '../services/auth.service';
import { TrajetService } from '../services/trajet.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-path-conditions',
  templateUrl: './path-conditions.component.html',
  styleUrls: ['./path-conditions.component.css']
})
export class PathConditionsComponent implements OnInit {

  autoTicks: boolean;
  max: number;
  min: number;
  showTicks: boolean;
  step: number;
  thumbLabel: boolean;
  value: number;
  tickInterval = 1;
  smoke: boolean;
  noSmoke: boolean;
  smokePassenger: boolean;
  noSmokePassenger: boolean;
  music: boolean;
  talk: boolean;
  user: User;
  constructor(private authService: AuthService, private userService: UserService) { }


  ngOnInit() {
    this.user = this.authService.currentUser;

    this.autoTicks = true;
    this.max = 10;
    this.min = 0;
    this.showTicks = false;
    this.step = 1;
    this.thumbLabel = true;
    this.value = 0;
    console.log('path', this.user);
    this.music = (this.user.isMusic) ? true : false;
    this.smoke = this.user.isSmoke != null ? this.user.isSmoke ? true : false : false;
    this.noSmoke = this.user.isSmoke != null ? this.user.isSmoke !== false ? true : false : false;
    this.talk = this.user.isTalk;
  }

  reverseSmokeCheckbox() {
    this.smoke = !this.smoke;
    this.noSmoke = false;
  }

  reverseNoSmokeCheckbox() {
    this.noSmoke = !this.noSmoke;
    this.smoke = false;
  }

  reverseSmokeCheckboxPassenger() {
    this.smokePassenger = !this.smokePassenger;
    this.noSmokePassenger = false;
  }

  reverseNoSmokeCheckboxPassenger() {
    this.noSmokePassenger = !this.noSmokePassenger;
    this.smokePassenger = false;
  }

  reverseMusic() {
    this.music = !this.music;
  }

  reverseTalk() {
    this.talk = !this.talk;
  }

  update() {
    this.user.isMusic = this.music;
    this.user.isSmoke = (this.smoke) ? true : this.noSmoke ? false : null;
    this.user.isTalk = this.talk;
    console.log(this.user);
    this.userService.saveUser(this.user).subscribe();
  }



}
