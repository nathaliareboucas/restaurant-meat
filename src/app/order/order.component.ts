import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  numberPattern = /^[0-9]*$/;
  orderForm: FormGroup;
  delivery: number = 8;
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartçao Refeição', value: 'REF' }
  ];

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true };
    }

    return undefined;
  }

  constructor(private orderService: OrderService,
    private router: Router,
    private formBuiler: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuiler.group({
      name: this.formBuiler.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuiler.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuiler.control('', [Validators.required, Validators.email]),
      address: this.formBuiler.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuiler.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuiler.control(''),
      paymentOption: this.formBuiler.control('', [Validators.required])
    }, { validator: OrderComponent.equalsTo });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.carItems();
  }

  increaseQty(item: any) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decrease(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-sumary']);
      this.orderService.clear();
    });
    console.log(order);
  }
}
