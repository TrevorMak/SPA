import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customers/customers/create-customer.component';
import { ViewCustomersComponent } from './customers/customers/view-customers.component';
import { ManageCustomerComponent } from './customers/customers/customer-manage.component';
import { CreateOrderComponent } from './orders/order-create.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full", redirectTo: "home"},
  {path: "home", component: ViewCustomersComponent},
  {path: "customer-search", component: ViewCustomersComponent},
  {path: "customer-create", component: CreateCustomerComponent},
  {path: "customer-manage/:id", component: ManageCustomerComponent},
  {path: "order-create", component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
