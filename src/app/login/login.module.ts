import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NotificationModule } from './../shared';
import { MaterialModule } from './../layout/material.module';
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        NotificationModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule],
    providers: [
        HttpClientModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
