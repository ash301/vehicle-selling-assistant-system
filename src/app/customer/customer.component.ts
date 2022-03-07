import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private messageService: MessageService) { }
  id : any;
  customerList:any[] = [];
  customer:any={};
  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.customerList = [
      {id:1,name:"Nicole Han",email:"nicol@gmail.com"},
      {id:2, name:"Billy Ma",email:"billy@gmail.com"},
      {id:3, name:"Elon Musk",email:"elon@gmail.com"},
      {id:4, name:"Anke Gobels",email:"anke@gmail.com"},
      {id:5, name:"Daniel Gurovic",email:"daniel@gmail.com"},
      {id:6, name:"Sofia S",email:"sofia@gmail.com"}
    ]

    this.customerList.forEach(element => {
      if(element.id == this.id){
        this.customer['id'] = element.id;
        this.customer['name'] = element.name;
        this.customer['email'] = element.email;
      }
    });

  }

  sendNotification()
  {
    this.messageService.add({severity:'success',summary:"Notification sent Successfully!"});
  }

  goToCustomerList()
  {
    this.router.navigateByUrl('customer-list');
  }

  save()
  {
    this.messageService.add({severity:'success',summary:"Data saved Successfully!"});
  }
}
