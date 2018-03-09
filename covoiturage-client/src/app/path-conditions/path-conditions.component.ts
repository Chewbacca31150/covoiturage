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


  private _tickInterval = 1;

}
