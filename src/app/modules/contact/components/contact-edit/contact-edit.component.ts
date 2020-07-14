import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ContactService } from '../../service/contact-service.service';
import { Contact } from '../../../../shared/contact/contact';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { ContactListComponent } from '../contact-list/contact-list.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-Contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  public title: string;

  public form: FormGroup;

  public nameFormControl: FormControl;

  public phoneNumberFomrControl: FormControl;

  public matcher = new MyErrorStateMatcher();

  public readonly durationInSeconds: number = 2;

  constructor(private dialogRef: MatDialogRef<ContactListComponent>, @Inject(MAT_DIALOG_DATA) private contact: Contact, private contactService: ContactService, private snackBar: MatSnackBar) {
    this.title = 'Salvar novo Contato';
    this.nameFormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.phoneNumberFomrControl = new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]);
    this.form = new FormGroup({
      nameFormControl: this.nameFormControl,
      phoneNumberFomrControl: this.phoneNumberFomrControl
    })
    this.setFormsControlsValues();
  }

  ngOnInit() {
    if (!this.contact) {
      this.contact = new Contact(this.contactService.addID(), undefined, undefined);
    }
  }

  public setFormsControlsValues(): void {
    if (this.contact) {
      this.title = 'Editar Contato';
      this.nameFormControl.setValue(this.contact.nome);
      this.phoneNumberFomrControl.setValue(this.contact.telefone);
    }
  }

  public onNoClick() {
    this.dialogRef.close();
  }

  public save() {
    this.contact.nome = this.nameFormControl.value;
    this.contact.telefone = this.phoneNumberFomrControl.value;
    this.contactService.saveContact(this.contact);
    this.dialogRef.close();
    this.openSnackBar();
  }

  openSnackBar() {
    const config: MatSnackBarConfig = {
      duration: this.durationInSeconds * 1000,
      data: { msg: `Contato ${this.contact.nome} salvo.` }
    };
    this.snackBar.openFromComponent(SnackbarComponent, config);
  }

}
