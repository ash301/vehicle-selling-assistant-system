import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginform : FormGroup;
  submitted = false;
  isUserLoggedin : boolean = false;
  showloader = false;

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router:Router,
    private commonService : CommonService) { 
      this.loginform = this.formBuilder.group({
        username : ['',Validators.required],
        password : ['', [Validators.required]]
      })
    }
  ngOnInit() {
  }

  get f() { return this.loginform.controls;}

  onSubmit() {
    this.submitted = true;

    if (this.loginform.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginform.value, null, 4));
    this.showloader = true;
    let user_details:any = {
      username:null,
      password : null
    };
    user_details.username = this.loginform.value.username;
    user_details.password = this.loginform.value.password;

    this.signin();

  }

  onReset() {
    this.submitted = false;
    this.loginform.reset();
  }

  signin()
  {
    this.messageService.add({severity:'success',summary:"Logged in Successfully!"});
    this.commonService.editisUserLoggedin(true);
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 1000);
  }

}
