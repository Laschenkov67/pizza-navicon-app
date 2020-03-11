import { Action } from '@ngrx/store';
import { Order } from './../interfaces/order.interface';
import { OrderActionTypes } from './../enums/order.enum';


export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LOAD_ORDERS;
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrderActionTypes.LOAD_ORDERS_SUCCESS;

  constructor(public payload: Order[]) {}
}

export class LoadOrdersFail implements Action {
  readonly type = OrderActionTypes.LOAD_ORDERS_FAIL;

  constructor(public payload: string) {}
}

export class CreateOrder implements Action {
  readonly type = OrderActionTypes.CREATE_ORDER;

  constructor(public payload: Order) {}
}

export class CreateOrderSuccess implements Action {
  readonly type = OrderActionTypes.CREATE_ORDER_SUCCESS;

  constructor(public payload: Order) {}
}

export class CreateOrderFail implements Action {
  readonly type = OrderActionTypes.CREATE_ORDER_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadOrders
  | LoadOrdersSuccess
  | LoadOrdersFail
  | CreateOrder
  | CreateOrderSuccess
  | CreateOrderFail