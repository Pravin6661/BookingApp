import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    BusbookingComponent,
    CarbookingComponent,
    EmployeetableComponent,
    FlightbookingComponent,
    HotelbookingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
