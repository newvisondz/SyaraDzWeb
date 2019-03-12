import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'prefix' },
            { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
            //{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'afficherFabricants', loadChildren: './list-fabricants/list-fabricants.module#ListFabricantsModule' },
            { path: 'creerFabricant', loadChildren: './form-fabricant/form-fabricant.module#FormFabricantModule' },
            //{ path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            //{ path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            //{ path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            //{ path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
