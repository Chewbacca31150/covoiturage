import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trajet } from '../models/trajet';
import { TrajetService } from '../services/trajet.service';
import { Contact } from '../models/contact';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  messages: Contact[];
  trajet: Trajet;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private snackBar: MatSnackBar,
    private fb: FormBuilder, private trajetService: TrajetService,
    private authService: AuthService, private userService: UserService,
    private notif: NotificationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trajetService.getOne(params['id']).subscribe(trajet => {
        this.trajet = trajet;
        this.LoadMessages();
      });
      this.contactService.getMessagesByTrajet(params['id']).subscribe(messages => {
        this.messages = messages;
      });
    });
    this.messageForm = this.fb.group({
      message: ''
    }, {});
  }

  private LoadMessages() {
    if(this.trajet){
      this.contactService.getMessagesByTrajet(this.trajet.id).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

  onSubmit(event: Event) {
    const message: Contact = {
      message: this.messageForm.value.message,
      trajet: this.trajet,
      receiverId: this.trajet.driverId,
      senderId: this.authService.currentUser.id,
      dateSent: new Date()
    };
    this.contactService.send(message).subscribe(m => {
      this.notif.get().subscribe(e => console.log(e));
      this.LoadMessages();
      this.messageForm.reset();
    });
    this.snackBar.open('Message envoyé', '', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    event.preventDefault();
  }

}
