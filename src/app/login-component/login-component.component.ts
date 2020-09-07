import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommanServiceService } from '../service/comman-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  loginFlag: boolean = true;
  loginFormData: FormGroup;
  user: any = {};

  constructor(private _fb:FormBuilder, private _service:CommanServiceService, private router:Router) {
    this.loginFormData = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(){
  }

  hideShowLogin(){
    this.loginFlag = true;
  }
  loginData(){
    var userFromLocal = localStorage.getItem('userList');
    var userFromLocalParse = JSON.parse(userFromLocal);
    var username = this.loginFormData.value['userName'];
    var password = this.loginFormData.value['password'];

   // console.log(userFromLocalParse[0]['userName']);
    let isValidUser = false;
    if(!isValidUser){
      userFromLocalParse.forEach(res => {
        if(username == res.userName && password == res.password){
          isValidUser = true;
        }
        return;
      });
      if(isValidUser){
          this.router.navigate(['./userRegister']);
      }else {
        alert('Register First');
      }
    }
  }

  get login(){ return this.loginFormData.controls;}

}
