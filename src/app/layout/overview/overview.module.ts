import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { PageHeaderModule, StatModule } from './../shared';
import { ChartsModule } from './../charts/charts.module';
import { MaterialModule } from './../material.module';
import { NotificationModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        OverviewRoutingModule,
        PageHeaderModule,
        StatModule,
        ChartsModule,
        MaterialModule,
        NotificationModule
    ],
    declarations: [
        OverviewComponent,
    ]
})
export class OverviewModule {}
