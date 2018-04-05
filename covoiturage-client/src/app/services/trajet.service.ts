import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import { HttpHeaders } from '@angular/common/http';
import { Trajet } from '../models/trajet';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrajetService {

  constructor(private apiService: ApiService, private authService: AuthService, private config: ConfigService) {
  }

  saveTrajet(trajet: Trajet) {
    return this.apiService.post(this.config.trajet_url, JSON.stringify(trajet)).map((response) => {
      console.log('done');
    });
  }

  getTrajets(): Observable<Trajet[]> {
    return this.apiService.get(this.config.trajet_url).map((response) => {
      return response;
    });
  }

  getOne(id: number): Observable<Trajet> {
    return this.apiService.get(this.config.trajet_one_url).map((response) => {
      return response;
    });
  }
}
