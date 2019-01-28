import { MEAT_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
    private http: HttpClient) { }

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
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
      .pipe(map(order => order.id))
  }

  clear() {
    this.cartService.clear();
  }
}
