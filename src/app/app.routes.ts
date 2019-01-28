import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedinGuard } from './security/loggedin.guard';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order', loadChildren: './order/order.module#OrderModule',
  canLoad: [LoggedinGuard], canActivate: [LoggedinGuard]},
  {path: 'order-sumary', component: OrderSumaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '**', component: NotFoundComponent},
];
