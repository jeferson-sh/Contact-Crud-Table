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
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ContactEditComponent } from './components/contact-edit/Contact-edit.component';
import { ContactListComponent } from './components/contact-list/Contact-list.component';
import { DialogSingleDataComponent } from './components/dialog-single-data/dialog-single-data.component';
import { DialogMultipleDataComponent } from './components/dialog-multiple-data/dialog-multiple-data.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';
import { MatSnackBarModule, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

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
    RouterModule,
    ContactListComponent
  ]
})
export class ContactModule {}
