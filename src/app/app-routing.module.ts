import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component:LoginComponentComponent
  },
  {
    path:'login', component:LoginComponentComponent
  },
  {
    path:'register', component:RegisterComponentComponent
  },
  {
    path:'userRegister', component:UserRegistrationComponent
  },
  {
    path:'userDetails', component:UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
