import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { CommanServiceService } from '../service/comman-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userRegisterFormData: FormGroup;
  user: any = {};
  editUserData = [];
  RegisterUpdateUser = "Register User";
  localUserData: any=[];
  localUserDataAfterParse: any;
  idWhileEdit: any;

  constructor(private _fb:FormBuilder, private _service:CommanServiceService, private router: Router) {
    this.userRegisterFormData = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      qualification: ['', Validators.required]
    })

    this._service.userData.subscribe(value => {
      if(value){
        this.editUserData = value;
        this.idWhileEdit = value.id;
        this.userRegisterFormData.patchValue(value);
        this.RegisterUpdateUser = "Update User";
      }
    })
   }

  ngOnInit() {
    this. localUserData = localStorage.getItem('registeredUsers');
    this.localUserDataAfterParse = JSON.parse(this.localUserData);
  }

  registerUser(){
  if(this.RegisterUpdateUser == "Register User"){
    var randomNo = Math.random();
    var appendRandomId = this.userRegisterFormData.value;
    appendRandomId.id = randomNo;
    this.user = Object.assign(this.user, appendRandomId);
    var register = this._service.addUserInfo(this.user);
    if(register){
    this.userRegisterFormData.reset();
    alert("user Register successfully :)");
  }
  }else{
    var appendId = this.userRegisterFormData.value;
    appendId.id = this.idWhileEdit;
    console.log(appendId.id);
    var update = this._service.updateUserInfo(appendId);
    if(update){
      alert("user Update successfully :)");
      this.router.navigate(['/userDetails']);
      }
    }
  }

get ulog(){ return this.userRegisterFormData.controls;}

}
