import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthInterceptorService } from '../shared/auth-interceptor.service';
<<<<<<< HEAD

@NgModule({
  imports: [CommonModule, AppRoutingModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent, AboutUsComponent, FaqComponent, ContactComponent],
=======
import { ResidentservicesComponent } from './residentservices/residentservices.component';
import { BookmodifyappointmentComponent } from './bookmodifyappointment/bookmodifyappointment.component';

@NgModule({
  imports: [CommonModule, AppRoutingModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent, AboutUsComponent, FaqComponent, ContactComponent, ResidentservicesComponent,  BookmodifyappointmentComponent],
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
  exports: [HeaderComponent, FooterComponent, SharedModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule {}
