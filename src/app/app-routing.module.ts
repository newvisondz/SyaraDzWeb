import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuardService } from './Services/Guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'dashboard',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuardService],

  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
