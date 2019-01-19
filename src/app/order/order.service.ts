import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) { }

  carItems(): CartItem[] {
    return this.cartService.itens;
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
}
