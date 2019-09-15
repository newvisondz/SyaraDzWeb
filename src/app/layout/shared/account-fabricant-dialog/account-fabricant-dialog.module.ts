import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../layout/material.module';
import { AccountFabricantDialogComponent } from './account-fabricant-dialog.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule,MaterialModule,FormsModule,ReactiveFormsModule],
    declarations: [AccountFabricantDialogComponent],
    exports: [AccountFabricantDialogComponent]
})
export class AccountFabricantDialogModule {}
