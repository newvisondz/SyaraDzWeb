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
  {
    path: 'access-denied',
    loadChildren: './access-denied/access-denied.module#AccessDeniedModule'
  },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
