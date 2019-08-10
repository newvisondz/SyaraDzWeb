import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserFabricantsRoutingModule } from './list-user-fabricants-routing.module';
import { ListUserFabricantsComponent } from './list-user-fabricants.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule,MessageSnackBarModule } from './../../shared';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DisplayCardUserComponent } from './display-card-user/display-card-user.component';
import { DisplayCardUsersComponent } from './display-card-users/display-card-users.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { UpdateUserFabricantDialogComponent } from './update-user-fabricant-dialog/update-user-fabricant-dialog.component';
import { CreateUserFabricantDialogComponent } from './create-user-fabricant-dialog/create-user-fabricant-dialog.component';

import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';

@NgModule({
    imports: [
      CommonModule,
      ListUserFabricantsRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      FormsModule,
      ReactiveFormsModule,MessageSnackBarModule],
    declarations: [CreateUserFabricantDialogComponent, ListUserFabricantsComponent, DisplayCardUserComponent, DisplayCardUsersComponent, DisplayUsersComponent,UpdateUserFabricantDialogComponent],
    entryComponents: [MessageSnackBarComponent,CreateUserFabricantDialogComponent, DeleteConfirmDialogComponent,UpdateUserFabricantDialogComponent],
})
export class ListUserFabricantsModule {}
