import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  getcontacts(){
    const contactList=[
      {contactId:1, contactName:'ARC'},
      {contactId:1, contactName:'Tutorials'},
      {contactId:1, contactName:'Youtube'},
      {contactId:1, contactName:'Playlists'}
    ];
    return contactList;
  }
}
