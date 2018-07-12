import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact-list/contact-data';
import { ContactService } from '../contact.service';

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
    private myActivatedRouteServ: ActivatedRoute,
    // our instance of the "ContactService" class (for access to the contacts array)
    private myContactServ: ContactService,
    // our instance of the "Router" class (for redirecting)
    private myRouterServ: Router
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
        this.contactItem = this.myContactServ.findOneContact(this.contactId);
      });
  }

  confirmDelete() {
    const { name } = this.contactItem;

    const isOkay = confirm(`Delete contact ${name}?`);

    if (isOkay) {
      this.myContactServ.deleteOneContact(this.contactId);
      // redirect away to the list page
      this.myRouterServ.navigateByUrl("/contacts");
                      // res.redirect("/contacts") in Express
    }
  }
}
