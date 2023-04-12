import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'loginAdmin', loadChildren: () => import('./login-admin/login-admin.module').then(m => m.LoginAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
