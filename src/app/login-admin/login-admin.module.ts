import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginAdminModule { }
