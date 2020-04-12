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
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material";
import { FrontpageComponent } from './frontpage/frontpage.component';


@NgModule({
  imports: [CommonModule, AppRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, MatMenuModule],
  declarations: [HeaderComponent, FooterComponent, AboutUsComponent, FaqComponent, ContactComponent, FrontpageComponent],
  exports: [HeaderComponent, FooterComponent, SharedModule, FrontpageComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class CoreModule {}
