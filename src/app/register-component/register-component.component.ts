import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CommanServiceService } from '../service/comman-service.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registerFormData: FormGroup;
  user: any = {};

  constructor(private _fb:FormBuilder, private _service:CommanServiceService, private router:Router) {

    this.registerFormData = this._fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

   }

  ngOnInit() {
  }

  registerData(){
    console.log(this.registerFormData.value);
    this.user = Object.assign(this.user, this.registerFormData.value);
    console.log(this.user);

    var res = this._service.registerUser(this.user);
    if(res){
      alert(" User Added successfully ):- ");
      this.registerFormData.reset();
    }
  }

  get register(){ return this.registerFormData.controls;}

}
