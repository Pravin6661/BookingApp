import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { CarbookingComponent } from './carbooking/carbooking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path:'flightbooking', component: FlightbookingComponent },
  { path:'busbooking', component: BusbookingComponent},
  { path:'carbooking', component: CarbookingComponent},
  { path:'hotelbooking', component: HotelbookingComponent },
  { path:'employeetable', component:EmployeetableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
