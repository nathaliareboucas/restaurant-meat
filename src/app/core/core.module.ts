import { NgModule } from '@angular/core';

import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from './../restaurants/restaurants.service';

@NgModule({
  providers: [RestaurantsService, ShoppingCartService, OrderService]
})
export class CoreModule {

}
