import { Component, OnInit } from '@angular/core';
import { Contact, contactList } from './contact-data';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact> = contactList;

  constructor() { }

  ngOnInit() {
  }

}
