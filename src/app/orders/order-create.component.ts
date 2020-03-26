import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../customers/customers/entities/customer';
import { BaseOrderPage } from './base-order.page';
import { OrderService } from './services/order-service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from './entities/order';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class CreateOrderComponent extends BaseOrderPage implements OnInit {

  public saveOrder(): void {
    if (!this.orderFormComponent.isValid) {
      //If the form isn't valid then mark all formcontrols as touched so it will display any errors.
      this.orderFormComponent.orderForm.markAllAsTouched();
      return;
    }

        //temporary work around until we implement an actual web api, json server stores the property e.g _firstName
        const newOrder =
        {
          name: this.order.name,
          customerId: this.customer.id,
          productCosts: this.order.productsCosts
        }
    
        this.orderService.create(newOrder).subscribe(
          () => {
            this.snackbar.open("New order has been created.");
            this.router.navigate([`/home`])
          }, () =>
          this.snackbar.open("Failed to create order"));
      }

  public customer: Customer;

  public constructor(cdr: ChangeDetectorRef, private route: ActivatedRoute,
    private orderService: OrderService, private snackbar: MatSnackBar, private router: Router) {
    super(cdr);

    this.order = new Order();
  }

  public ngOnInit() {

    this.route.data.subscribe((data: {customer : Customer}) => {
      this.customer = data.customer;
    },
    () => {
      //Should be done by a route guard.
      this.snackbar.open("User does not exist");
    });
  }
}
