import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './modules/contact/contact.module';


@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContactModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
