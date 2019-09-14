import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './error-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderHomeComponent } from './home-page/header-home/header-home.component';
import { MissionHomeComponent } from './home-page/mission-home/mission-home.component';
import { TarifViewComponent } from './home-page/tarif-view/tarif-view.component';
import { TarifComponent } from './home-page/tarif/tarif.component';
import { ServiceViewComponent } from './home-page/service-view/service-view.component';
import { ServiceComponent } from './home-page/service/service.component';
import { HomePageService } from './home-page/services/home-page.service';
import { FooterHomeComponent } from './home-page/footer-home/footer-home.component';
import { MaterialModule } from './layout/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    MissionHomeComponent,
    TarifViewComponent,
    TarifComponent,
    ServiceViewComponent,
    ServiceComponent,
    FooterHomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    HomePageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
