import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import {FormUserRoutingModule} from './form-user-routing.module';
import { MaterialModule } from './../material.module';
import { PageHeaderModule } from './../shared';

@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    FormUserRoutingModule,
    MaterialModule,
    PageHeaderModule
  ]
})
export class FormUserModule { }
