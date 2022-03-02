import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SignupComponent } from './signup/signup.component';
import {SharedModule} from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
