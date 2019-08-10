import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageSnackBarComponent } from './message-snack-bar.component';
import { MaterialModule } from './../../layout/material.module';

@NgModule({
  declarations: [MessageSnackBarComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports :[
    MessageSnackBarComponent
  ],

})
export class MessageSnackBarModule { }
