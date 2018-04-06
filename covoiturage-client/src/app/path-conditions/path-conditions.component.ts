import { Component, OnInit } from '@angular/core';
import { Trajet } from '../models/trajet';
import { AuthService } from '../services/auth.service';
import { TrajetService } from '../services/trajet.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

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
  user: User;
  driverForm: FormGroup;
  passengerForm: FormGroup;
  constructor(private _fb: FormBuilder, private authService: AuthService,
    private userService: UserService, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.user = this.authService.currentUser;
    this.driverForm = this._fb.group({
      smoke: this.user.smokeDriver != null ? this.user.smokeDriver ? true : false : false,
      noSmoke: this.user.smokeDriver != null ? !this.user.smokeDriver ? true : false : true,
      music: this.user.musicDriver,
      talk: this.user.talkDriver
    }, {});
    this.passengerForm = this._fb.group({
      smoke: this.user.smokePassenger != null ? this.user.smokePassenger ? true : false : false,
      noSmoke: this.user.smokePassenger != null ? !this.user.smokePassenger ? true : false : true,
      music: this.user.musicPassenger,
      talk: this.user.talkPassenger
    });
    this.autoTicks = true;
    this.max = 10;
    this.min = 0;
    this.showTicks = false;
    this.step = 1;
    this.thumbLabel = true;
    this.value = 0;
  }

  reverseSmokeCheckboxDriver() {
    this.driverForm.controls['noSmoke'].setValue(false);
  }
  reverseNoSmokeCheckboxDriver() {
    this.driverForm.controls['smoke'].setValue(false);
  }
  reverseSmokeCheckboxPassenger() {
    this.passengerForm.controls['noSmoke'].setValue(false);
  }
  reverseNoSmokeCheckboxPassenger() {
    this.passengerForm.controls['smoke'].setValue(false);
  }

  update() {
    // TODO mettre driver et passenger @adrien
    const driverForm = this.driverForm.value;
    const passengerForm = this.passengerForm.value;
    this.user.smokeDriver = (driverForm.smoke) ? true : driverForm.noSmoke ? false : null;
    this.user.musicDriver = driverForm.music;
    this.user.talkDriver = driverForm.talk;
    this.user.smokePassenger = (passengerForm.smokeDriver) ? true : passengerForm.noSmokeDriver ? false : null;
    this.user.musicPassenger = passengerForm.music;
    this.user.talkPassenger = passengerForm.talk;
    this.userService.saveUser(this.user).subscribe();
    this.snackBar.open('Preferences mises a jour.', '', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });

  }
}
