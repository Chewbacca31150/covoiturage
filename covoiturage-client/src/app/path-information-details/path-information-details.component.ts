import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from '../models/trajet';
import { TrajetService } from '../services/trajet.service';

@Component({
  selector: 'app-path-information-details',
  templateUrl: './path-information-details.component.html',
  styleUrls: ['./path-information-details.component.css']
})
export class PathInformationDetailsComponent implements OnInit {
  trajet: Trajet;
  constructor(private route: ActivatedRoute, private router: Router, private trajetService: TrajetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.trajetService.getOne(id).subscribe(trajet => this.trajet = trajet);
    });
  }

  contact() {
    this.router.navigate(['message', this.trajet.id]);
  }
  add() {
    this.trajetService.postOne(this.trajet);
  }

}
