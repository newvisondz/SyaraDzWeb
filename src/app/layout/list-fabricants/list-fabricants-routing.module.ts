import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFabricantsComponent } from './list-fabricants.component';

const routes: Routes = [
    {
        path: '', component: ListFabricantsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListFabricantsRoutingModule {
}
