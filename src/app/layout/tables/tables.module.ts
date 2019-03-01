import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../shared';
import { MaterialModule } from './../material.module';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule,MaterialModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
