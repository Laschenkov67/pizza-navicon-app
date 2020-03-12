
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule} from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { orderReducer } from '../store/reducers/order.reducer';
import { OrderEffect } from '../store/effects/order.effects';

import { OrdersComponent } from './order/orders.component';
import { OrdersFormComponent } from './orders-form/orders-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';


const orderRoutes: Routes = [{ path: "", component: OrdersComponent }];

@NgModule({
  declarations: [
    OrdersListComponent,
    OrdersFormComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(orderRoutes),
    StoreModule.forFeature("orders", orderReducer),
    EffectsModule.forFeature([OrderEffect])
  ]
})

export class OrdersModule { }