import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact } from '../../../../shared/contact/contact';
import { ContactService } from '../../service/contact-service.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
@Component({
  selector: 'app-dialog-single-data',
  templateUrl: './dialog-single-data.component.html',
  styleUrls: ['./dialog-single-data.component.css']
})
export class DialogSingleDataComponent{
  
  public readonly durationInSeconds: number;

  constructor( 
    private dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public contact:Contact,
    private contactService:ContactService,
    private snackBar: MatSnackBar
  ){
    this.durationInSeconds = 2;
  }

  public onNoClick(){
    this.dialogRef.close();
  }

  public remove(){
    this.contactService.deleteContact(this.contact);
    this.dialogRef.close();
    this.openSnackBar();
  }

  openSnackBar() {
    const config: MatSnackBarConfig = {
      duration: this.durationInSeconds * 1000,
      data: {msg:`Contato ${this.contact.nome} removido.`}
    };
    this.snackBar.openFromComponent(SnackbarComponent,config);
  }

}
