import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListVersionsRoutingModule } from './list-versions-routing.module';
import { ListVersionsComponent } from './list-versions.component';
import { PageHeaderModule } from './../../shared';
import { MaterialModule } from './../../material.module';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule,ZoomImageDialogModule } from './../../../shared';
import { ZoomImageDialogComponent} from './../../../shared/zoom-image-dialog/zoom-image-dialog.component';
import { DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { CreateAttributeDialogComponent } from './../create-attribute-dialog/create-attribute-dialog.component';
import { CreateVersionDialogComponent } from './../create-version-dialog/create-version-dialog.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ListModelesModule} from './../list-modeles.module';
import { ListOptionsDialogComponent } from './list-options-dialog/list-options-dialog.component';
@NgModule({
    imports: [
      CommonModule,
      ListVersionsRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      ZoomImageDialogModule,
      FormsModule,
      ReactiveFormsModule,
      ListModelesModule],
    declarations: [ListOptionsDialogComponent, ListVersionsComponent],
    entryComponents: [ListOptionsDialogComponent, ZoomImageDialogComponent,DeleteConfirmDialogComponent,CreateAttributeDialogComponent,CreateVersionDialogComponent],
})
export class ListVersionsModule {}
