import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseCustomerPage } from './base-customer.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './entities/customer';
import { CustomerService } from './services/customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent extends BaseCustomerPage {

  public constructor(cdr: ChangeDetectorRef, private route: ActivatedRoute,
    private customerService: CustomerService, private snackbar: MatSnackBar, private router: Router) {
    super(cdr);

    // TODO: Implement this when we add update
    // route.data.subscribe((data: {event: ICustomerCreatedEvent}) => {
    //   this.customer = data.event.customer;
    // }, (x) => {
    this.customer = new Customer();
    this.snackbar
  }

  public saveCustomer(): void {
    if (!this.customerFormComponent.isValid) {
      //If the form isn't valid then mark all formcontrols as touched so it will display any errors.
      this.customerFormComponent.customerForm.markAllAsTouched();
      return;
    }

    //temporary work around until we implement an actual web api, json server stores the property e.g _firstName
    const newCustomer =
    {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email
    }

    this.customerService.create(newCustomer).subscribe(
      () => {
        this.snackbar.open("New customer has been created.");
        this.router.navigate([`/home`])
      }, () =>
      this.snackbar.open("Failed to create customer"));
  }

}
