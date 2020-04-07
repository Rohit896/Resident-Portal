import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { AppConfigService } from './app-config.service';
import { BookingService } from './feature/booking/booking.service';

=======
import { AppComponent } from './app.component';
import { AppConfigService } from './app-config.service';
import { BookingService } from './feature/booking/booking.service';
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
=======
import { AppComponent } from './app.component';
import { AppConfigService } from './app-config.service';
import { BookingService } from './feature/booking/booking.service';
>>>>>>> d9ff2ef242275a24ef5664bb0c5d6a262e4eedaf
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from 'src/app/core/services/config.service';

const appInitialization = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    NgxPrintModule
  ],
  providers: [
    BookingService,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitialization,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  config: ConfigService;
}
