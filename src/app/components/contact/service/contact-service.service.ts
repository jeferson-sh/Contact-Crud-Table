import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contacts: Contact[];
  private readonly INVALID_INDEX: number = -1;
  private readonly REMOVE_COUNT: number = 1;
  private valuesCount: number;

  constructor() { 
    this.contacts = [
      new Contact(1,'João', 99999999999),
      new Contact(2,'Maria',12349874658),
      new Contact(3,'José',45633456784),
      new Contact(4,'Humberto',54356797213),
      new Contact(5,'Rodrigo',67896789456),
      new Contact(6,'Mara',46789678321),
      new Contact(7,'André',97045647623),
      new Contact(8,'Marcos',54324567415),
      new Contact(9,'Dorgival',54234523321),
      new Contact(10,'Rafael',54323456174),
      new Contact(11,'Tiago',54312342157),
      new Contact(12,'Reginaldo',54435753214),
      new Contact(13,'Regina',54356865721),
      new Contact(14,'Mary',54346742178),
      new Contact(15,'Thalita',54456745632),
      new Contact(16,'Jeferson',54343563421),
      new Contact(17,'Sandra',54323452179),
      new Contact(18,'Jardson',54586578321),
      new Contact(19,'Heloísa',54389078921),
      new Contact(20,'Fernanda',54234532179),
    ]
    this.valuesCount = this.contacts.length;
  }

  public getContacts(): Contact[]{
    return this.contacts;
  }

  addID():number{
    return ++this.valuesCount;
  }


  deleteAll(){
    this.contacts = new Array();
  }

  deleteContact(contact: Contact) {
    let index:number = this.contacts.indexOf(contact);
    if(index != this.INVALID_INDEX){
      this.contacts.splice(index,this.REMOVE_COUNT);
    }
  }
  
  getById(id:number):Contact{
    return this.contacts.find(value =>value.id===+id);
  }

  deleteAllSelected(contactsSelected: Contact[]){
    contactsSelected.forEach(item=>this.deleteContact(item));
  }

  saveContact(contact:Contact){
    let index:number = this.contacts.indexOf(contact);
    if(index === this.INVALID_INDEX) {
      this.contacts.push(contact);
    }
    this.valuesCount++;
  }
}
