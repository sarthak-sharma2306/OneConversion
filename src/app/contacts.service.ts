import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { }
  getcontacts(){
     return this.httpClient.get('http://localhost:3000/contacts')
  }

createContact(createBody)
{
  return this.httpClient.post('http://localhost:3000/contacts',createBody);
}

  callingFromTemplate() 
  {
    console.log('Calling from template directly');
  }

  // Gets a specific contact by taking Id as a http param
  getContactById()
  {
    const httpparams= new HttpParams({
      fromObject:{
        query:'John'
      }
    });
    this.httpClient.get('http://localhost:3000/contacts', {params:httpparams});
  }
}
