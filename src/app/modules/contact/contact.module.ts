import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DialogMultipleDataComponent } from './components/dialog-multiple-data/dialog-multiple-data.component';
import { DialogSingleDataComponent } from './components/dialog-single-data/dialog-single-data.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';

@NgModule({
  declarations: [ContactListComponent, ContactEditComponent, DialogSingleDataComponent, DialogMultipleDataComponent, PhonePipePipe, SnackbarComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogSingleDataComponent,
    DialogMultipleDataComponent,
    ContactEditComponent,
    SnackbarComponent
  ],
  exports: [
    ContactListComponent, ContactEditComponent, DialogSingleDataComponent, DialogMultipleDataComponent, PhonePipePipe, SnackbarComponent
  ]
})
export class ContactModule {}
