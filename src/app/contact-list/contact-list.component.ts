import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  // services are ALWAYS connected in the constructor
  constructor(
    // our instance of the "ContactService" class (for access to the contacts array)
    public myContactServ: ContactService
  ) { }

  ngOnInit() {
  }

}
