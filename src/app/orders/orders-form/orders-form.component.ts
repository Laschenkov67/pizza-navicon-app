import { Order } from './../../store/interfaces/order.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import * as orderActions from "../../store/actions/order.actions";
import * as fromOrder from "../../store/reducers/order.reducer";

@Component({
  selector: "app-orders-form",
  templateUrl: "./orders-form.component.html",
  styleUrls: ["./orders-form.component.scss"]
})
export class OrdersFormComponent implements OnInit {
  formOrder: FormGroup;

  newOrder: Order = {
    surname: "",
    name: "",
    phone: "",
    address: "",
    pizza: "",
    dough: "",
    size: "",
    ingredients:[]
  };

  public ingKey = ["Сыр моцарелла", "Бекон", "Охотничьи колбаски", "Перец", "Оливки"];

  public ingredients = [
    "Сыр моцарелла",
    "Бекон",
    "Охотничьи колбаски",
    "Перец",
    "Оливки"
  ];

  constructor(private store: Store<fromOrder.AppState>) {}

  ngOnInit() {

    const optionsIng = new FormGroup({});
    for (const key of this.ingKey) {
      optionsIng.addControl(key, new FormControl());
    }

    this.formOrder = new FormGroup({
      surname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(20)
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ]),
      pizza: new FormControl("Русская", [Validators.required]),
      dough: new FormControl("Традиционное", [Validators.required]),
      size: new FormControl("S", [Validators.required]),
      options: optionsIng
    });
  }

  createOrder() {
    const newOrder = {...this.formOrder.value};
    this.store.dispatch(new orderActions.CreateOrder(newOrder));
    this.formOrder.reset();
  }
}
