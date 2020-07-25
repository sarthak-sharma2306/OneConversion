import { Component, OnInit } from '@angular/core';
import { ContactsService} from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }
  contactList: any;
  msgTrue=false;
  ngOnInit(): void {
   // this.contactList = this.contactsService.getcontacts();
   this.contactsService.getcontacts().subscribe(data =>{
    this.contactList = data;
   });
  }

  addNewContact()
  {
    const newFormData = {id:7, FirstName:'Harvey', LastName:'Ross'};
    this.contactsService.createContact(newFormData).subscribe(Data=>{
    console.log(Data);
    this.msgTrue=true;
    });
  }
}