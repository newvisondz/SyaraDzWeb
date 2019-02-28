import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFabricantComponent } from './form-fabricant.component';

const routes: Routes = [
    {
        path: '', component: FormFabricantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormFabricantRoutingModule {
}
