import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from './../material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { PageHeaderModule } from './../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
