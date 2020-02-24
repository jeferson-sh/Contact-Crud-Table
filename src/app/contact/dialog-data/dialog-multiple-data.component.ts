import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material';
import {ContactService } from '../Contact-service.service';
import {Contact } from '../shared/contact';
import { ContactListComponent } from '../Contact-list/Contact-list.component';
@Component({
  selector: 'app-dialog-single-data',
  templateUrl: './dialog-multiple-data.component.html',
  styleUrls: ['./dialog-multiple-data.component.css']
})
export class DialogMultipleDataComponent{

  constructor( 
    private dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) private Contacts:Contact[],
    private contactService:ContactService
  ){}

  private onNoClick(){
    this.dialogRef.close();
  }

  private remove(){
    this.contactService.deleteAllSelected(this.Contacts);
    this.dialogRef.close();
  }

}
