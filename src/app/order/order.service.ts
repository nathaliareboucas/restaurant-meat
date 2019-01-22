import { MEAT_API } from './../app.api';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) { }

  carItems(): CartItem[] {
    return this.cartService.itens;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.remover(item);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', aplication/json)
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order, )
  }
}
