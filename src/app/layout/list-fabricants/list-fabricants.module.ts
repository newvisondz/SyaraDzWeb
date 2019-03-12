import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFabricantsRoutingModule } from './list-fabricants-routing.module';
import { ListFabricantsComponent } from './list-fabricants.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule } from './../../shared';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';


@NgModule({
    imports: [CommonModule, ListFabricantsRoutingModule, PageHeaderModule,MaterialModule,NotificationModule,DeleteConfirmDialogModule],
    declarations: [ListFabricantsComponent],
    entryComponents: [DeleteConfirmDialogComponent],
})
export class ListFabricantsModule {}
