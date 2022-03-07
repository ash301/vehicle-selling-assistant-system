import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  ngOnInit(){}
  isUserLoggedin = new BehaviorSubject<boolean>(false);
  broadcastisUserLoggedin = this.isUserLoggedin.asObservable();

  user = new BehaviorSubject<any>(null);
  broadcastUser = this.user.asObservable();


  editisUserLoggedin(newValue:boolean)
  {
    this.isUserLoggedin.next(newValue);
  }

  editUser(newValue:boolean)
  {
    this.user.next(newValue);
  }
}
