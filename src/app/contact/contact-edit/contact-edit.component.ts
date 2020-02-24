import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from '../Contact-service.service';
import { Contact } from '../shared/contact';
import { ContactListComponent } from '../Contact-list/Contact-list.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-Contact-edit',
  templateUrl: './Contact-edit.component.html',
  styleUrls: ['./Contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  private title: string;

  private nameFormControl: FormControl;

  private phoneNumberFomrControl: FormControl;

  private matcher = new MyErrorStateMatcher();

  constructor(private dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) private contact:Contact,
    private contactService:ContactService) {
      this.title = 'Salvar novo Contato';
      this.nameFormControl = new FormControl('', [Validators.required,Validators.minLength(2)]);
      this.phoneNumberFomrControl = new FormControl('', [Validators.required,Validators.minLength(14)]);
      this.setFormsControlsValues();
  }

  ngOnInit() {
    if(!this.contact){
      this.contact= new Contact(this.contactService.addID(),undefined,undefined);
    }
  }
  
  private setFormsControlsValues(): void {
    if(this.contact){
      this.title='Editar Contato';
      this.nameFormControl.setValue(this.contact.nome);
      this.phoneNumberFomrControl.setValue(this.contact.telefone);
    }
  }

  private onNoClick(){
    this.dialogRef.close();
  }

  private save(){
    this.contact.nome = this.nameFormControl.value;
    this.contact.telefone = this.phoneNumberFomrControl.value;
    this.contactService.saveContact(this.contact);
    this.dialogRef.close();
  }

}
