import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProComponent } from './pages/add-pro/add-pro.component';
import { EditProComponent } from './pages/edit-pro/edit-pro.component';
import { ListProComponent } from './pages/list-pro/list-pro.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path:'',component:ListProComponent},
      {path:'addProduct',component:AddProComponent},
      {path:'editProduct/:id',component:EditProComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
