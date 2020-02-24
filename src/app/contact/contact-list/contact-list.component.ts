import { Component, OnInit, ViewChild, Inject, Input, Output, ComponentRef } from '@angular/core';
import {Contact } from '../shared/contact';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogSingleDataComponent } from '../dialog-data/dialog-single-data.component';
import { ComponentType } from '@angular/cdk/portal';
import { DialogMultipleDataComponent } from '../dialog-data/dialog-multiple-data.component';
import { ContactService } from '../Contact-service.service';
import { ContactEditComponent } from '../Contact-edit/Contact-edit.component';

@Component({
  selector: 'app-Contact-list',
  templateUrl: './Contact-list.component.html',
  styleUrls: ['./Contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts:Contact[];

  private displayedColumns: string[];

  private pageSizeOptions: string[];

  private dataSource: MatTableDataSource<Contact>;

  private selection: SelectionModel<Contact>;

  private readonly EMPTY:number = 0;


  @ViewChild(MatPaginator, { static: true })
  private paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  private sort: MatSort;

  constructor(private contactService: ContactService, private dialog: MatDialog) {
    this.displayedColumns = ['select', 'id', 'nome', 'telefone', 'ações'];
    this.pageSizeOptions = ['5', '10', '25', '50', '100'];
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
    this.selection = new SelectionModel<Contact>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**Apply Filter Search */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(Contact?:Contact): string {
    if (!Contact) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(Contact) ? 'deselect' : 'select'} row ${Contact.id + 1}`;
  }

  /**Remove singleContact row  */
  openDialogSingleDeletion(Contact:Contact) {
    let matDialogConfig = new MatDialogConfig<Contact>();
    matDialogConfig.data =Contact;
    this.openDialog(matDialogConfig, DialogSingleDataComponent);
  }
  /**Remove rows selected */
  openDialogMultiplesDeletion() {
    if(this.selection.selected.length != this.EMPTY){
      let matDialogConfig = new MatDialogConfig<Contact[]>();
      matDialogConfig.data = this.selection.selected;
      this.openDialog(matDialogConfig, DialogMultipleDataComponent);
    }    
  }

  openDialogEditContact(Contact:Contact){
    let matDialogConfig = new MatDialogConfig<Contact>();
    matDialogConfig.data =Contact;
    this.openDialog(matDialogConfig,ContactEditComponent);
  }

  openDialogAddContact(){
    let matDialogConfig = new MatDialogConfig<Contact>();
    this.openDialog(matDialogConfig,ContactEditComponent);
  }

  openDialog(matDialogConfig: MatDialogConfig, component: ComponentType<Object>) {
    let dialogRef = this.dialog.open(component, matDialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.updateChangeList();
      if(component === DialogMultipleDataComponent){
        this.selection.clear();
      }
    })
  }

  private updateChangeList() {
    this.dataSource._updateChangeSubscription();
  }
}