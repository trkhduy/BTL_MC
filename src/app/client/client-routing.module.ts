import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FilterComponent } from './pages/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';
import { KITproductComponent } from './pages/kitproduct/kitproduct.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', component: ClienthomeComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: KITproductComponent },
      { path: 'filter/:id', component: FilterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'cart', component: CartComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
