import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

//const authRoutes: Routes = [{ path: '', component: LoginComponent }];
const authRoutes: Routes = [{ path: '', component: MainpageComponent }];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======

>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
