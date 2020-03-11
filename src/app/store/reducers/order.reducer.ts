import { OrderActionTypes } from '../enums/order.enum';
import { Order } from '../interfaces/order.interface';
import * as orderActions from "../actions/order.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as fromRoot from "../state/app-state";

export interface OrderState extends EntityState<Order> {
  selectedOrderId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  orders: OrderState;
}

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const defaultCustomer: OrderState = {
  ids: [],
  entities: {},
  selectedOrderId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = orderAdapter.getInitialState(defaultCustomer);

export function orderReducer(
  state = initialState,
  action: orderActions.Action
): OrderState {
  switch (action.type) {
    case OrderActionTypes.LOAD_ORDERS_SUCCESS: {
      return orderAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case OrderActionTypes.LOAD_ORDERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case OrderActionTypes.CREATE_ORDER_SUCCESS: {
      return orderAdapter.addOne(action.payload, state);
    }
    case OrderActionTypes.CREATE_ORDER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}