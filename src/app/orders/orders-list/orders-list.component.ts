import { Order } from './../../store/interfaces/order.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";

import * as orderActions from "../../store/actions/order.actions";
import * as fromOrder from "../../store/reducers/order.reducer";
import { getOrders, getError } from "src/app/store/selectors/order.selector";

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders$: Observable<Order[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromOrder.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new orderActions.LoadOrders());
    this.orders$ = this.store.pipe(select(getOrders));
    console.log(this.orders$);
    
    this.error$ = this.store.pipe(select(getError));
  }

}
