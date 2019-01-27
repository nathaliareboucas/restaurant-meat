import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule ],
  exports: [
    InputComponent, RadioComponent, RatingComponent,
    FormsModule, ReactiveFormsModule, CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [RestaurantsService, ShoppingCartService, OrderService]
    };
  }
}
