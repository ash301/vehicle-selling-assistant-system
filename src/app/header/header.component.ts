import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService : CommonService,private router: Router) { }
  loggedIn: boolean = false;
  ngOnInit(): void {
    this.commonService.broadcastisUserLoggedin.subscribe(resp=>{
      this.loggedIn = resp;
      console.log("response"+ resp);
    },error=>{
      console.log("Error in fetching userDetails: "+error);
    })
  }

  goToStaff()
  {
    this.router.navigateByUrl("staff");
  }

}
