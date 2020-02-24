import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {ContactListComponent } from './Contact-list/Contact-list.component';
import {ContactEditComponent } from './Contact-edit/Contact-edit.component';
import { RouterModule } from '@angular/router';
import { DialogSingleDataComponent } from './dialog-data/dialog-single-data.component';
import { DialogMultipleDataComponent } from './dialog-data/dialog-multiple-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ContactListComponent,ContactEditComponent, DialogSingleDataComponent,DialogMultipleDataComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule ,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogSingleDataComponent,DialogMultipleDataComponent,ContactEditComponent],
  exports:[
    RouterModule,
   ContactListComponent
  ]
})
export class ContactModule { }
