import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material';
import {ContactService } from '../Contact-service.service';
import {Contact } from '../shared/contact';
import { ContactListComponent } from '../Contact-list/Contact-list.component';
@Component({
  selector: 'app-dialog-single-data',
  templateUrl: './dialog-single-data.component.html',
  styleUrls: ['./dialog-single-data.component.css']
})
export class DialogSingleDataComponent{

  constructor( 
    private dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) private contact:Contact,
    private contactService:ContactService
  ){}

  private onNoClick(){
    console.log(this.contact)
    this.dialogRef.close();
  }

  private remove(){
    this.contactService.deleteContact(this.contact);
    this.dialogRef.close();
  }

}
