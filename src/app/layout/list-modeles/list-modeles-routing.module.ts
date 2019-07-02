import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListModelesComponent } from './list-modeles.component';

const routes: Routes = [
    {
        path: '', component: ListModelesComponent
    },
    { path: 'versions/:id', loadChildren: './list-versions/list-versions.module#ListVersionsModule' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListModelesRoutingModule {
}
