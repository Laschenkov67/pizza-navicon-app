import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from './../store/interfaces/order.interface';

@Injectable({
  providedIn: "root"
})

export class OrderService {

  private ordersUrl = "http://localhost:3000/orders";

  constructor(private http: HttpClient) {}

  //Получить список заказов
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  //Создать заказ
  createOrder(payload: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, payload);
  }

}