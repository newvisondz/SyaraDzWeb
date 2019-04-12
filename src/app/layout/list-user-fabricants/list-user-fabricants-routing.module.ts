import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserFabricantsComponent } from './list-user-fabricants.component';
import { DisplayCardUsersComponent } from './display-card-users/display-card-users.component';
import { DisplayUsersComponent } from './display-users/display-users.component';

const routes: Routes = [
    {
        path: '',
        component: ListUserFabricantsComponent,
        children : [
          { path: '', redirectTo: 'brands', pathMatch: 'full' },
          { path: 'brands', component: DisplayCardUsersComponent},
          { path: 'admins/:id', component: DisplayUsersComponent, data: { title: 'Administrateurs' }},
          { path: 'users/:id', component: DisplayUsersComponent , data: { title: 'Utilisateurs' }},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListUserFabricantsRoutingModule {
}
