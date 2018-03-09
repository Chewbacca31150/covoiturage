import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-conditions',
  templateUrl: './path-conditions.component.html',
  styleUrls: ['./path-conditions.component.css']
})
export class PathConditionsComponent implements OnInit {

  autoTicks: boolean
  max: number
  min: number
  showTicks: boolean
  step: number
  thumbLabel: boolean
  value: number
  tickInterval:number = 1;
  smoke:boolean = false;
  noSmoke:boolean =false;
  smokePassenger:boolean = false;
  noSmokePassenger:boolean =false;

  constructor() { }


  ngOnInit() {
    this.autoTicks = true;
    this.max = 10;
    this.min = 0;
    this.showTicks = false;
    this.step = 1;
    this.thumbLabel = true;
    this.value = 0;
  }

  reverseSmokeCheckbox(){
    this.smoke = !this.smoke;
    this.noSmoke = false;
  }
  
  reverseNoSmokeCheckbox(){
    this.noSmoke = !this.noSmoke;
    this.smoke = false;
  }

  reverseSmokeCheckboxPassenger(){
    this.smokePassenger = !this.smokePassenger;
    this.noSmokePassenger = false;
  }
  
  reverseNoSmokeCheckboxPassenger(){
    this.noSmokePassenger = !this.noSmokePassenger;
    this.smokePassenger = false;
  }

  private _tickInterval = 1;

}
