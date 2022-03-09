import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-selling-info',
  templateUrl: './vehicle-selling-info.component.html',
  styleUrls: ['./vehicle-selling-info.component.scss']
})
export class VehicleSellingInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToStaff()
  {
    this.router.navigateByUrl('staff');
  }

  goToHome()
  {
    this.router.navigateByUrl('home');
  }
}
