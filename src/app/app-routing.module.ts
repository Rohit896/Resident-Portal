import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FaqComponent } from './core/faq/faq.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactComponent } from './core/contact/contact.component';
import { ParentComponent } from './shared/parent/parent.component';
import { AuthGuardService } from './auth/auth-guard.service';

=======
=======
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
import { ContactComponent } from './core/contact/contact.component';
import { ParentComponent } from './shared/parent/parent.component';
import { AuthGuardService } from './auth/auth-guard.service';
import {ResidentservicesComponent} from './core/residentservices/residentservices.component';
import {BookmodifyappointmentComponent} from './core/bookmodifyappointment/bookmodifyappointment.component';
<<<<<<< HEAD
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
/**
 * @description These are the routes.
 */
const appRoutes: Routes = [
  { path: 'dashboard', loadChildren: './feature/dashboard/dashboard.module#DashboardModule' },
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'about-us', component: AboutUsComponent },
=======
  { path: 'Residentservices', component: ResidentservicesComponent },
  { path: 'Bookmodifyappointment', component:BookmodifyappointmentComponent},
  //{path: 'Bookmodifyappointment', redirectTo :'https://dev.mosip.io/pre-registration-ui/#/' , pathMatch :'full'},
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======
  { path: 'Residentservices', component: ResidentservicesComponent },
  { path: 'Bookmodifyappointment', component:BookmodifyappointmentComponent},
  //{path: 'Bookmodifyappointment', redirectTo :'https://dev.mosip.io/pre-registration-ui/#/' , pathMatch :'full'},
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },

  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: 'pre-registration',
=======
    path: 'pre-registration', 
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======
    path: 'pre-registration', 
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
    component: ParentComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: 'demographic', loadChildren: './feature/demographic/demographic.module#DemographicModule' },
      { path: 'file-upload', loadChildren: './feature/file-upload/file-upload.module#FileUploadModule' },
      { path: 'summary', loadChildren: './feature/summary/summary.module#SummaryModule' },
      { path: 'booking', loadChildren: './feature/booking/booking.module#BookingModule' }
    ]
  }
];

/**
 * @author Shashank Agrawal
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
/*export const routingcomponents=[BookmodifyappointmentComponent , ResidentservicesComponent]*/

>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======
/*export const routingcomponents=[BookmodifyappointmentComponent , ResidentservicesComponent]*/

>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
