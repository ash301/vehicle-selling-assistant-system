import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router) { }

  customerList:any[] = [];
  ngOnInit(): void {
    this.customerList = [
      {id:1,name:"Nicole Han",email:"nicol@gmail.com"},
      {id:2, name:"Billy Ma",email:"billy@gmail.com"},
      {id:3, name:"Elon Musk",email:"elon@gmail.com"},
      {id:4, name:"Anke Gobels",email:"anke@gmail.com"},
      {id:5, name:"Daniel Gurovic",email:"daniel@gmail.com"},
      {id:6, name:"Sofia S",email:"sofia@gmail.com"}
    ]
  }

  goToCustomerDetail(customer:any){
    this.router.navigate(["customer-info"],{queryParams:{id:customer.id}});
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
