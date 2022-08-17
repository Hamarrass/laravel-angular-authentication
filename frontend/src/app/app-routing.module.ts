import { NgModule , Component} from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'singup',
    component:SignupComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'request-password-reset',
    component:RequestResetComponent
  },
  {
    path: 'response-password-reset',
    component:ResponseResetComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
