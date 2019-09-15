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
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'afficherFabricants', loadChildren: './list-fabricants/list-fabricants.module#ListFabricantsModule' },
            { path: 'afficherUsersFabricants', loadChildren: './list-user-fabricants/list-user-fabricants.module#ListUserFabricantsModule' },
            { path: 'modeles', loadChildren: './list-modeles/list-modeles.module#ListModelesModule' },
            { path: 'commandes', loadChildren: './list-commandes/list-commandes.module#ListCommandesModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
