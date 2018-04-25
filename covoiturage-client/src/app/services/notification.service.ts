import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class NotificationService {

  constructor(private apiService: ApiService, private config: ConfigService) { }
  get() {
    return this.apiService.get<NotificationDto[]>(this.config.notification_dist_url);
  }
}

export interface NotificationDto
{
  Id: number;
}