import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [LoginComponent, MainpageComponent],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, AuthRoutingModule, AppRoutingModule, SharedModule]
})
export class AuthModule {}
