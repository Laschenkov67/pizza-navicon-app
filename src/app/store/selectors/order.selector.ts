import { OrderState, orderAdapter } from '../reducers/order.reducer';

import { createFeatureSelector, createSelector } from "@ngrx/store";

const getOrderFeatureState = createFeatureSelector<OrderState>("orders");
  
  export const getOrders = createSelector(
    getOrderFeatureState,
    orderAdapter.getSelectors().selectAll
  );
  
  export const getOrdersLoading = createSelector(
    getOrderFeatureState,
    (state: OrderState) => state.loading
  );
  
  export const getOrdersLoaded = createSelector(
    getOrderFeatureState,
    (state: OrderState) => state.loaded
  );
  
  export const getError = createSelector(
    getOrderFeatureState,
    (state: OrderState) => state.error
  );
  
  export const getCurrentOrderId = createSelector(
    getOrderFeatureState,
    (state: OrderState) => state.selectedOrderId
  );

  export const getCurrentCustomer = createSelector(
    getOrderFeatureState,
    getCurrentOrderId,
    state => state.entities[state.selectedOrderId]
  );