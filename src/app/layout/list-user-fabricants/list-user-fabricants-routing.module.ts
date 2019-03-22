import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserFabricantsComponent } from './list-user-fabricants.component';

const routes: Routes = [
    {
        path: '', component: ListUserFabricantsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListUserFabricantsRoutingModule {
}
