import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainpageComponent } from './mainpage/mainpage.component';
<<<<<<< HEAD

@NgModule({
  declarations: [LoginComponent, MainpageComponent],
=======
@NgModule({
  declarations: [LoginComponent, MainpageComponent],
  //declarations: [LoginComponent],
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
  imports: [FormsModule, CommonModule, ReactiveFormsModule, AuthRoutingModule, AppRoutingModule, SharedModule]
})
export class AuthModule {}
