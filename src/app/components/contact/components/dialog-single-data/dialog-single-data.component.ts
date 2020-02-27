import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ContactListComponent } from '../contact-list/Contact-list.component';
import { Contact } from '../../../../shared/contact/contact';
import { ContactService } from '../../service/contact-service.service';
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
    this.dialogRef.close();
  }

  private remove(){
    this.contactService.deleteContact(this.contact);
    this.dialogRef.close();
  }

}
