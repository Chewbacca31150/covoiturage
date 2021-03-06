import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from '../models/trajet';
import { TrajetService } from '../services/trajet.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-path-information-details',
  templateUrl: './path-information-details.component.html',
  styleUrls: ['./path-information-details.component.css']
})
export class PathInformationDetailsComponent implements OnInit {
  trajet: Trajet;
  user: User; // Driver du trajet
  userConnect: User; // Utilisateur connecte
  smoke = 'Non';
  music = 'Non';
  speak = 'Non';
  back = 'Non';

  constructor(private route: ActivatedRoute, private router: Router,
    private trajetService: TrajetService, private _authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.trajetService.getOne(id).subscribe(trajet => {
        this.trajet = trajet;
        this.userService.getOne(trajet.driverId).subscribe(user => {
          this.user = user;
          if (user.smokeDriver) {
            this.smoke = 'Oui';
          }
          if (user.musicDriver) {
            this.music = 'Oui';
          }
          if (user.talkDriver) {
            this.speak = 'Oui';
          }
          if (trajet.pathBack) {
            this.back = 'Oui';
          }
        });
        this._authService.getMyInfo().subscribe(user => {
          this.userConnect = user;
        });
      });
    });

  }

  contact() {
    this.router.navigate(['contact', this.trajet.id]);
  }
  add() {
    this.trajetService.postOne(this.trajet).subscribe(a => console.log(a));
  }

}
