import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommandesRoutingModule } from './list-commandes-routing.module';
import { ListCommandesComponent } from './list-commandes.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule,MessageSnackBarModule } from './../../shared';
import { MessageSnackBarComponent} from './../../shared/message-snack-bar/message-snack-bar.component';
import { DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ListCommandesRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      FormsModule,
      ReactiveFormsModule,
      MessageSnackBarModule],
    declarations: [ListCommandesComponent],
    entryComponents: [MessageSnackBarComponent,DeleteConfirmDialogComponent],
})
export class ListCommandesModule {}
