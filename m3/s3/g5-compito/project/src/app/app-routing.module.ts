import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  { path:'', redirectTo: 'auth',pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'post',
  canActivate: [AuthGuard],
   loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
