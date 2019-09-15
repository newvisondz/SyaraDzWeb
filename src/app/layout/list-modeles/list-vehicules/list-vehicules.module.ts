import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVehiculesRoutingModule } from './list-vehicules-routing.module';
import { ListVehiculesComponent } from './list-vehicules.component';
import { PageHeaderModule } from './../../shared';
import { MaterialModule } from './../../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule } from './../../../shared';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
//import { UpdateVehichuleDialogComponent } from './update-vehicule-dialog/update-vehicule-dialog.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ListVehiculesRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      FormsModule,
      ReactiveFormsModule],
    declarations: [ListVehiculesComponent, /*UpdateVehichuleDialogComponent*/],
    entryComponents: [DeleteConfirmDialogComponent,/*UpdateVehichuleDialogComponent*/],
})
export class ListVehiculesModule {}
