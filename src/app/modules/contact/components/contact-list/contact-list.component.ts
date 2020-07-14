import { SelectionModel } from '@angular/cdk/collections';
import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../../../../shared/contact/contact';
import { ContactService } from '../../service/contact-service.service';
import { DialogMultipleDataComponent } from '../dialog-multiple-data/dialog-multiple-data.component';
import { DialogSingleDataComponent } from '../dialog-single-data/dialog-single-data.component';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';

@Component({
  selector: 'app-Contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts:Contact[];

  public displayedColumns: string[];

  public pageSizeOptions: string[];

  public dataSource: MatTableDataSource<Contact>;

  public selection: SelectionModel<Contact>;

  public readonly EMPTY:number = 0;


  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  public sort: MatSort;

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
    const paginatorIntl = this.paginator._intl;
    paginatorIntl.nextPageLabel = 'Próxima página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.firstPageLabel= 'Primeira página';
    paginatorIntl.lastPageLabel= 'Última página';
    paginatorIntl.itemsPerPageLabel='Itens por página';
  }

  /**Apply Filter Search */
  applyFilter(value: string) {
    const filterValue = value;
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
  checkboxLabel(contact?:Contact): string {
    if (!contact) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(contact) ? 'deselect' : 'select'} row ${contact.id + 1}`;
  }

  /**Remove singleContact row  */
  openDialogSingleDeletion(contact:Contact) {
    let matDialogConfig = new MatDialogConfig<Contact>();
    matDialogConfig.data = contact;
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

  openDialogEditContact(contact:Contact){
    let matDialogConfig = new MatDialogConfig<Contact>();
    matDialogConfig.data =contact;
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
      this.selection.clear();
    })
  }

  public updateChangeList() {
    this.dataSource._updateChangeSubscription();
  }
}