import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trajet } from '../models/trajet';
import { TrajetService } from '../services/trajet.service';
import { Contact } from '../models/contact';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  trajet: Trajet;
  constructor(private contactService: ContactService, private route: ActivatedRoute,
    private fb: FormBuilder, private trajetService: TrajetService, private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trajetService.getOne(params['id']).subscribe(trajet => {
        this.trajet = trajet;
      });
    });
    this.messageForm = this.fb.group({
      message: ''
    }, {});
  }

  onSubmit(event: Event) {
    const message: Contact = {
      message: this.messageForm.value.message,
      trajet: this.trajet,
      receiverId: this.trajet.driverId,
      senderId: this.authService.currentUser.id,
      dateSent: new Date()
    };
    this.contactService.send(message).subscribe(m => console.log(m));
    event.preventDefault();
  }

}
