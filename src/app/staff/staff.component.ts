import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome()
  {
    this.router.navigateByUrl('home');
  }
  goToCustomerList()
  {
    this.router.navigateByUrl('customer-list');
  }
  signout(){
    this.router.navigateByUrl('#');
  }
  goToAnalysis()
  {
    this.router.navigateByUrl('analysis');
  }
  goToVehicleSellingInfo()
  {
    this.router.navigateByUrl('vehicle-selling-info');
  }
}
