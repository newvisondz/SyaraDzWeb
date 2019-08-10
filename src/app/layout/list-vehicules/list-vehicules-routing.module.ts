import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVehiculesComponent } from './list-vehicules.component';

const routes: Routes = [
    {
        path: '', component: ListVehiculesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListVehiculesRoutingModule {
}
