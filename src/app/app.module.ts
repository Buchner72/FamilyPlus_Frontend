
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { Page1Component } from "./page1/page1.component";

import { HttpClientModule } from "@angular/common/http";
// import {HttpModule} from "@angular/http";

import { PersonService } from './person.service';
//import { PersonService2 } from './person.service2';
import { PersonenListComponent } from "./personen-list/personen-list.component";


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
     AppRoutingModule,
     HttpClientModule    
    ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
