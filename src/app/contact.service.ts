import { Injectable } from '@angular/core';
import { Contact, contactList } from './contact-list/contact-data';

// "@Injectable" allows it to be included in other classes
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // make a copy of the "contactList" array for our starting data
  contacts: Array<Contact> = [...contactList];

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  findOneContact(id: string) {
    let contactItem: Contact;

    this.contacts.forEach((oneContact) => {
      if (oneContact._id === id) {
        contactItem = oneContact;
      }
    });

    return contactItem;
  }

  deleteOneContact(id: string) {
    let contactIndex: number;

    this.contacts.forEach((oneContact, index) => {
      if (oneContact._id === id) {
        contactIndex = index;
      }
    });

    this.contacts.splice(contactIndex, 1);
  }
}
