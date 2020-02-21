import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  // contacts: Contact[] = [];
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
