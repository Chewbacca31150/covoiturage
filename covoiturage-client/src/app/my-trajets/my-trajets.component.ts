import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../models/trajet';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-my-trajets',
  templateUrl: './my-trajets.component.html',
  styleUrls: ['./my-trajets.component.css']
})
export class MyTrajetsComponent implements OnInit {
  trajets: Trajet[];
  trajetsPassenger: Trajet[];
  constructor(private route: Router, private trajetService: TrajetService) { }

  ngOnInit() {
    this.trajetService.findMyTrajets().subscribe(trajets => {
      this.trajets = trajets;
    });
    this.trajetService.findMyTrajetsPassenger().subscribe(trajets => {
      this.trajetsPassenger = trajets;
    });
  }

  goTo(id: number) {
    this.route.navigate(['/path-information-details', id]);
  }

  addOrRefuse(trajet: Trajet, user: User, isAccepted: boolean) {
    this.trajetService.addOrRefuse(trajet, user, isAccepted).subscribe((a) => console.log(a));
  }

}
