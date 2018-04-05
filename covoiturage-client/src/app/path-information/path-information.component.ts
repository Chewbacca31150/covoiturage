import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path-information',
  templateUrl: './path-information.component.html',
  styleUrls: ['./path-information.component.css']
})
export class PathInformationComponent implements OnInit {

  trajets: Trajet[] = [];
  trajetsCtrl: FormControl;
  filteredStates: Observable<any[]>;
  constructor(private route: Router, private trajetService: TrajetService) { }

  ngOnInit() {
    this.trajetsCtrl = new FormControl();
    this.trajetService.getTrajets().subscribe((trajets) => {
      this.trajets = trajets;
    });
  }

  find(search: string) {
    this.trajetService.find(search).subscribe(trajets => this.trajets = trajets);
  }

  goTo(id: number) {
    this.route.navigate(['/path-information-details', id]);
  }
}
