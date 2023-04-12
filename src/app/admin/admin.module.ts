import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProComponent } from './pages/list-pro/list-pro.component';
import { AddProComponent } from './pages/add-pro/add-pro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProComponent } from './pages/edit-pro/edit-pro.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    ListProComponent,
    AddProComponent,
    EditProComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
