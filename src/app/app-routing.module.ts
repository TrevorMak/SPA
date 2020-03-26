import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customers/customers/create-customer.component';
import { ViewCustomersComponent } from './customers/customers/view-customers.component';
import { ManageCustomerComponent } from './customers/customers/customer-manage.component';
import { CreateOrderComponent } from './orders/order-create.component';
import { CustomerResolver } from './customers/customers/services/customer.resolver';
import { OrderService } from './orders/services/order-service';
import { ViewOrdersComponent } from './orders/view-orders.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: ViewCustomersComponent },
  { path: "customers", component: ViewCustomersComponent },
  { path: "customer-create", component: CreateCustomerComponent },
  { path: "customer-manage/:id", component: ManageCustomerComponent },
  { path: "order/:id/create",
   component: CreateOrderComponent,
   resolve: {
     customer: CustomerResolver
   }
  },
   { path: "orders", component: ViewOrdersComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CustomerResolver
  ],
})
export class AppRoutingModule { }
