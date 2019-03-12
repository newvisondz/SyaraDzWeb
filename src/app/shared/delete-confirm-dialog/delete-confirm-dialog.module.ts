import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog.component';
import { MaterialModule } from './../../layout/material.module';

@NgModule({
  declarations: [DeleteConfirmDialogComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports :[
    DeleteConfirmDialogComponent
  ],

})
export class DeleteConfirmDialogModule { }
