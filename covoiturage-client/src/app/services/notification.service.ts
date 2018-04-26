import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class NotificationService {

  constructor(private apiService: ApiService, private config: ConfigService) { }
  get() {
    return this.apiService.get<NotificationDto[]>(this.config.notification_dist_url);
  }

  delete(notification: NotificationDto) {
    return this.apiService.delete(`${this.config.notification_dist_url}?id=${notification.id}`);
  }
}

export interface NotificationDto
{
  id: number;
  trajetId: number;
  userId: number;
  message: string;
}