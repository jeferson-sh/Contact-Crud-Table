import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact/Contact-list/Contact-list.component';
import { ContactEditComponent } from './contact/Contact-edit/Contact-edit.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  {path: 'contact-edit/:id', component: ContactEditComponent},
  {path: 'contact-add', component: ContactEditComponent}

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
