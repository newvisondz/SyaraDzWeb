import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NotificationModule } from './../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        NotificationModule],
    providers: [
        HttpClientModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
