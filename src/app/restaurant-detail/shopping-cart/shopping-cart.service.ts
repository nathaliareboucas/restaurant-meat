import { Injectable } from '@angular/core';

import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { NotificationService } from './../../shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {

  itens: CartItem[] = [];

  constructor(private notificationService: NotificationService) {}

  clear() {
    this.itens = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.itens.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.itens.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  remover(item: CartItem) {
    this.itens.splice(this.itens.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
  }

  total(): number {
    return this.itens.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.remover(item);
    }
  }
}
