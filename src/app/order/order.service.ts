import { MEAT_API } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient,
              private loginService: LoginService) { }

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
    let headers = new HttpHeaders()
    if (this.loginService.isLoogedIn()) {
      headers = headers.set('authorization', `Bearer ${this.loginService.user.accessToken}`)
    }
    return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                    .map(order => order.id)
  }

  clear() {
    this.cartService.clear();
  }
}
