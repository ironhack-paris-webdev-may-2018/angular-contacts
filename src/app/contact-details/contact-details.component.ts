import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, contactList } from '../contact-list/contact-data';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId: string;
  contactItem: Contact;

  // services are ALWAYS connected in the constructor
  constructor(
    // our instance of the "ActivatedRoute" class (for URL parameters)
    private myActivatedRouteServ: ActivatedRoute
  ) { }

  ngOnInit() {
    // the (complicated) Angular way to get "req.params"
    this.myActivatedRouteServ.paramMap
      // ".subscribe()" is kind of like ".then()"
      .subscribe((myParams) => {
        // "blahId" comes from the route's PATH
        // { path: "contact/:blahId", ... }
        this.contactId = myParams.get("blahId");

        // search the array for the contact with the right ID
        contactList.forEach((oneContact) => {
          if (oneContact._id === this.contactId) {
            this.contactItem = oneContact;
          }
        });
      });
  }

}
