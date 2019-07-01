import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../layout/material.module';

import { ContractFabricantDialogComponent } from './contract-fabricant-dialog.component';

@NgModule({
    imports: [CommonModule,MaterialModule],
    declarations: [ContractFabricantDialogComponent],
    exports: [ContractFabricantDialogComponent]
})
export class ContractFabricantDialogModule {}
