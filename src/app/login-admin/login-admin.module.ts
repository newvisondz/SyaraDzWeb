import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { LoginAdminComponent } from './login-admin.component';
import { NotificationModule } from './../shared';
import { MaterialModule } from './../layout/material.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginAdminRoutingModule,
        NotificationModule,
        MaterialModule],
    providers: [
        HttpClientModule],
    declarations: [LoginAdminComponent]
})
export class LoginAdminModule {}
