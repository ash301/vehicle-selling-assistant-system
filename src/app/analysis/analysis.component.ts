import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

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
