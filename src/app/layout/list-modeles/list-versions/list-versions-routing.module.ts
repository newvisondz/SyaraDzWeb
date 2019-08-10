import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVersionsComponent } from './list-versions.component';

const routes: Routes = [
    {
        path: '', component: ListVersionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListVersionsRoutingModule {
}
