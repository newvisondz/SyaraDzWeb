import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListModelesRoutingModule } from './list-modeles-routing.module';
import { ListModelesComponent } from './list-modeles.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule,ZoomImageDialogModule } from './../../shared';
import { ZoomImageDialogComponent} from './../../shared/zoom-image-dialog/zoom-image-dialog.component';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { UpdateModeleDialogComponent } from './update-modele-dialog/update-modele-dialog.component';
import { CreateAttributeDialogComponent } from './create-attribute-dialog/create-attribute-dialog.component';
import { CreateVersionDialogComponent } from './create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './create-modele-dialog/create-modele-dialog.component';
import { ListColorsDialogComponent } from './list-colors-dialog/list-colors-dialog.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ListModelesRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      ZoomImageDialogModule,
      FormsModule,
      ReactiveFormsModule],
    declarations: [ListColorsDialogComponent, ListModelesComponent, UpdateModeleDialogComponent,CreateAttributeDialogComponent,CreateVersionDialogComponent, CreateModeleDialogComponent],
    entryComponents: [ListColorsDialogComponent, ZoomImageDialogComponent,DeleteConfirmDialogComponent,UpdateModeleDialogComponent,CreateAttributeDialogComponent,CreateVersionDialogComponent, CreateModeleDialogComponent],
})
export class ListModelesModule {}
