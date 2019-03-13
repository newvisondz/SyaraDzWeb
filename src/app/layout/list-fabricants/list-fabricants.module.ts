import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFabricantsRoutingModule } from './list-fabricants-routing.module';
import { ListFabricantsComponent } from './list-fabricants.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule } from './../../shared';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { UpdateFabriquatDialogComponent } from './update-fabriquat-dialog/update-fabriquat-dialog.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ListFabricantsRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      FormsModule,
      ReactiveFormsModule],
    declarations: [ListFabricantsComponent, UpdateFabriquatDialogComponent],
    entryComponents: [DeleteConfirmDialogComponent,UpdateFabriquatDialogComponent],
})
export class ListFabricantsModule {}
