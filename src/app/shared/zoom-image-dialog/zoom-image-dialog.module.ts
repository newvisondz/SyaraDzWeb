import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomImageDialogComponent } from './zoom-image-dialog.component';
import { MaterialModule } from './../../layout/material.module';

@NgModule({
  declarations: [ZoomImageDialogComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports :[
    ZoomImageDialogComponent
  ],

})
export class ZoomImageDialogModule { }
