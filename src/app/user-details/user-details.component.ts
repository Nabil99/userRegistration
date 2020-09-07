import { Component, OnInit } from '@angular/core';
import { CommanServiceService } from '../service/comman-service.service';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  localUserData: any=[];
  localUserDataAfterParse: any;
  userRegisterFormData: FormGroup;
  user: any = {};
  editUserData: any;
  hideUserDetails: boolean = true;

  constructor(private _fb:FormBuilder, private _service:CommanServiceService, private router: Router) {}

   ngOnInit() {
    this. localUserData = localStorage.getItem('registeredUsers');
    this.localUserDataAfterParse = JSON.parse(this.localUserData);
    console.log(this.localUserDataAfterParse);
  }

  editUser(user){
    console.log(user);
    this.router.navigate(['/userRegister']);
    setTimeout(() => {
      this._service.userData.emit(user);
    }, 1000);
  }

  deleteUser(user){
    this._service.userData.emit(user);
    var res = this._service.deleteUserInfo(user);
    if(res){
    alert("user deleted Successsfully :)");
    location.reload();
    }
  }
}
