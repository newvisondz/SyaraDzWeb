import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { PageHeaderModule, StatModule } from './../shared';
import { ChartsModule } from './../charts/charts.module';


@NgModule({
    imports: [
        CommonModule,
        OverviewRoutingModule,
        PageHeaderModule,
        StatModule,
        ChartsModule
    ],
    declarations: [
        OverviewComponent,
    ]
})
export class OverviewModule {}
