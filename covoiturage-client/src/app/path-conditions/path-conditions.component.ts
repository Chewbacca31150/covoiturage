import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-path-conditions',
  templateUrl: './path-conditions.component.html',
  styleUrls: ['./path-conditions.component.css']
})
export class PathConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class SliderConfigurableExample {
  autoTicks = false;
  max = 10;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}
