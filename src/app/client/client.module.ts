import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { KITproductComponent } from './pages/kitproduct/kitproduct.component';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { FilterComponent } from './pages/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchitemPipe } from './searchitem.pipe';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    KITproductComponent,
    ClienthomeComponent,
    FilterComponent,
    SearchitemPipe,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
