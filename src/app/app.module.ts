import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { PersonenListComponent } from './personen-list/personen-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    Page1Component,
    PersonenListComponent
  ],
  imports: [
    BrowserModule,
   //
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
