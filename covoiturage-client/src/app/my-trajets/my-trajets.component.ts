import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-trajets',
  templateUrl: './my-trajets.component.html',
  styleUrls: ['./my-trajets.component.css']
})
export class MyTrajetsComponent implements OnInit {
  trajets: Trajet[];
  constructor(private route: Router, private trajetService: TrajetService) { }

  ngOnInit() {
    this.trajetService.findMyTrajets().subscribe(trajets => {
      this.trajets = trajets;
    });
  }

  goTo(id: number) {
    this.route.navigate(['/path-information-details', id]);
  }

}
