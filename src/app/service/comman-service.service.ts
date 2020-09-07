import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {
  userData: EventEmitter<any> = new EventEmitter()

  constructor() { }

  registerUser(user){
    let users = [];
    if(localStorage.getItem('userList')){
      users = JSON.parse(localStorage.getItem('userList'));
      users = [user, ...users]
    }else{
      users = [user];
    }
    localStorage.setItem('userList',JSON.stringify(users));
    return true;
  }

  addUserInfo(user){
    let userData = [];
    if(localStorage.getItem('registeredUsers')){
      userData = JSON.parse(localStorage.getItem('registeredUsers'));
      userData = [user, ...userData];
    }else{
      userData = [user];
    }
    localStorage.setItem('registeredUsers', JSON.stringify(userData));
    return true;
  }

  updateUserInfo(user){
    let userData = [];
    if(localStorage.getItem('registeredUsers')){
      userData = JSON.parse(localStorage.getItem('registeredUsers'));
      userData.forEach((cur, index) =>{
        if(user.id == cur.id){
          userData.splice(index,1);
        }
      });
      userData.unshift(user);
    }
    localStorage.setItem('registeredUsers', JSON.stringify(userData));
    return true;
  }

deleteUserInfo(user){
  let userData = [];
    if(localStorage.getItem('registeredUsers')){
      userData = JSON.parse(localStorage.getItem('registeredUsers'));
      userData.forEach((cur, index) =>{
        if(user.id == cur.id){
          userData.splice(index,1);
        }
      });
    }
    localStorage.setItem('registeredUsers', JSON.stringify(userData));
    return true;
  }
}
