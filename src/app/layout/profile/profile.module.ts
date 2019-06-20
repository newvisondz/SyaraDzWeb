import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from './../material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { PageHeaderModule } from './../shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotificationModule,DeleteConfirmDialogModule } from '../../shared';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NotificationModule,
    DeleteConfirmDialogModule,
  ],
  entryComponents: [DeleteConfirmDialogComponent],
})
export class ProfileModule { }
