import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/entities/order/order.component';
import { CreateCustomerComponent } from './customers/customers/create-customer.component';
import { ViewCustomersComponent } from './customers/customers/view-customers.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo: "home"},
  {path: "home", component: ViewCustomersComponent},
  {path: "customer-search", component: ViewCustomersComponent},
  {path: "orders", component: OrderComponent},
  {path: "customer-create", component: CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
