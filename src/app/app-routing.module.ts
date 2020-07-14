import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './modules/contact/components/contact-list/contact-list.component';
import { ContactEditComponent } from './modules/contact/components/contact-edit/contact-edit.component';

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
