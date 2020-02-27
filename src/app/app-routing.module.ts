import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact/components/contact-list/Contact-list.component';
import { ContactEditComponent } from './components/contact/components/contact-edit/Contact-edit.component';

const routes: Routes = [
  {
    path: '', component: ContactListComponent,
    children: [
      {path: ':id', component: ContactEditComponent},
      {path: 'contact-add', component: ContactEditComponent }
    ]
  },
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
