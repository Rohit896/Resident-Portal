import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FaqComponent } from './core/faq/faq.component';
import { ContactComponent } from './core/contact/contact.component';
import { ParentComponent } from './shared/parent/parent.component';
import { AuthGuardService } from './auth/auth-guard.service';
import {ResidentservicesComponent} from './core/residentservices/residentservices.component';
import {BookmodifyappointmentComponent} from './core/bookmodifyappointment/bookmodifyappointment.component';
/**
 * @description These are the routes.
 */
const appRoutes: Routes = [
  { path: 'dashboard', loadChildren: './feature/dashboard/dashboard.module#DashboardModule' },
  { path: 'Residentservices', component: ResidentservicesComponent },
  { path: 'Bookmodifyappointment', component:BookmodifyappointmentComponent},
  //{path: 'Bookmodifyappointment', redirectTo :'https://dev.mosip.io/pre-registration-ui/#/' , pathMatch :'full'},
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'pre-registration', 
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
/*export const routingcomponents=[BookmodifyappointmentComponent , ResidentservicesComponent]*/

