import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MissionHomeComponent } from './mission-home/mission-home.component';
import { TarifViewComponent } from './tarif-view/tarif-view.component';
import { TarifComponent } from './tarif/tarif.component';
import { ServiceViewComponent } from './service-view/service-view.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    MissionHomeComponent,
    TarifViewComponent,
    TarifComponent,
    ServiceViewComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
