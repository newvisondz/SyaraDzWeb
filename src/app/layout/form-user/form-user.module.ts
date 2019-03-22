import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import {FormUserRoutingModule} from './form-user-routing.module';
import { MaterialModule } from './../material.module';
import { PageHeaderModule } from './../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    FormUserRoutingModule,
    MaterialModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormUserModule { }
