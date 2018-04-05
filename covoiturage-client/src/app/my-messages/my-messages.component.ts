import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {
  messages: Contact[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getMyMessages().subscribe(messages => this.messages = messages);
  }

}
