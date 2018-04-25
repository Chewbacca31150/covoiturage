import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor(private apiService: ApiService, private authService: AuthService, private config: ConfigService) { }

  send(message: Contact) {
    return this.apiService.post(this.config.contact_send_url, JSON.stringify(message));
  }

  getMyMessages() {
    return this.apiService.get<Contact[]>(this.config.contact_get_mine_url);
  }

  getMessagesByTrajet(trajetId: any): Observable<Contact[]> {
    return this.apiService.get<Contact[]>(`${this.config.contact_get_mine_url}?id=${trajetId}`);
  }
}
