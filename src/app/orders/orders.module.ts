import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { Routes } from '@angular/router';
import { OrdersComponent } from './order/orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const orderRoutes: Routes = [{ path: "", component: OrdersComponent }];

@NgModule({
  declarations: [
    OrdersListComponent,
    OrdersFormComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule
  ]
})

export class OrdersModule { }