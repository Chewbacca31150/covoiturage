import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import { HttpHeaders } from '@angular/common/http';
import { Trajet } from '../models/trajet';
import { Observable } from 'rxjs/Observable';
import { Search } from '../models/search';
import { User } from '../models/user';

@Injectable()
export class TrajetService {

  constructor(private apiService: ApiService, private authService: AuthService, private config: ConfigService) {
  }

  saveTrajet(trajet: Trajet) {
    return this.apiService.post(this.config.trajet_url, JSON.stringify(trajet)).map((response) => {
      console.log('lol method is empty');
    });
  }

  getTrajets(): Observable<Trajet[]> {
    return this.apiService.get<Trajet[]>(this.config.trajet_url);
  }

  getTrajetsNotDriver(): Observable<Trajet[]> {
    return this.apiService.get(this.config.trajet_not_driver_url);
  }

  find(search: string): Observable<Trajet[]> {
    return this.apiService.get<Trajet[]>(this.config.trajet_search_url + '?search=' + search);
  }

  findMyTrajets(): Observable<Trajet[]> {
    return this.apiService.get<Trajet[]>(this.config.my_trajets_url);
  }

  findMyTrajetsPassenger(): Observable<Trajet[]> {
    return this.apiService.get(this.config.my_trajets_passengers_url);
  }

  findTrajetsDist(search: Search): Observable<Trajet[]> {
    return this.apiService.post(this.config.trajet_dist_url, search);
  }

  getOne(id: number): Observable<Trajet> {
    return this.apiService.get<Trajet>(this.config.trajet_one_url + '?id=' + id);
  }

  postOne(trajet: Trajet): Observable<Trajet> {
    return this.apiService.post(this.config.trajet_one_url, trajet);
  }

  findTrajetsSpecific(): Observable<Trajet[]> {
    return this.apiService.get<Trajet[]>(this.config.trajet_from_users_url);
  }

  addOrRefuse(trajet: Trajet, user: User, isAccepted: boolean): Observable<Trajet> {
    return this.apiService.post(this.config.accept_or_refuse_user + '?userId=' + user.id + '&isAccepted=' + isAccepted,
      trajet).map(response => response);
  }
}
