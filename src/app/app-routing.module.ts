import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaffComponent } from './staff/staff.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'search-results',component:SearchResultsComponent},
  {path:'vehicle-info',component:VehicleInfoComponent},
  {path:'staff',component:StaffComponent},
  {path:'customer-list',component:CustomerListComponent},
  {path:'customer-info',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
