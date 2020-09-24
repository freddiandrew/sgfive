import { AuthGaurd } from './shared/auth.gaurd';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path:'auth',
    loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule)
  },
  {
     path: '',
     canActivate: [AuthGaurd],
     loadChildren: () => import('./main/sample/sample.module').then(m => m.SampleModule)

  },
  {
      path      : '**',
      redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
