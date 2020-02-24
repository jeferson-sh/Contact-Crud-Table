import { Injectable } from '@angular/core';
import { Contact } from './shared/contact';

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
      new Contact(1,'João', 12345),
      new Contact(2,'Maria',54321),
      new Contact(3,'José',4563),
      new Contact(4,'Humberto',5435679721),
      new Contact(5,'Rodrigo',67896789),
      new Contact(6,'Mara',546789678321),
      new Contact(7,'André',970456),
      new Contact(8,'Marcos',5432456741),
      new Contact(9,'Dorgival',54234523321),
      new Contact(10,'Rafael',543234561),
      new Contact(11,'Tiago',543123421),
      new Contact(12,'Reginaldo',5443575321),
      new Contact(13,'Regina',54356865721),
      new Contact(14,'Mary',543467421),
      new Contact(15,'Thalita',544567456321),
      new Contact(16,'Jeferson',54343563421),
      new Contact(17,'Sandra',543234521),
      new Contact(18,'Jardson',54586578321),
      new Contact(19,'Heloísa',54389078921),
      new Contact(20,'Fernanda',542345321),
      new Contact(21,'Salete',5445635764321),
      new Contact(22,'Augusto',54234234321),
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
