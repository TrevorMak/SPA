import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseCustomerPage } from './base-customer.page';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CustomerService } from './services/customer.service';
import { Customer } from './entities/customer';
import { cloneDeep, isEqual } from 'lodash';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.scss']
})
export class ManageCustomerComponent extends BaseCustomerPage implements OnInit{

  private originalCustomer: Customer;

  public constructor(cdr: ChangeDetectorRef, private route: ActivatedRoute,
    private customerService: CustomerService, private snackbar: MatSnackBar, private router: Router) {
    super(cdr);
  }

  public saveCustomer(): void {
    if (!this.customerFormComponent.isValid) {
      //If the form isn't valid then mark all formcontrols as touched so it will display any errors.
      this.customerFormComponent.customerForm.markAllAsTouched();
      return;
    }
    
    if (!this.hasCustomerFieldsChanged())
    {
      this.navigateOnSuccess();
      return;
    }

    this.customerService.update(this.customer).subscribe(
      () => {
        this.navigateOnSuccess();
      },
      () => {
        this.snackbar.open("Failed to update customer");
      }
    )
  }

  public ngOnInit(): void {

    const id = this.route.snapshot.params["id"];
    this.customerService.getById(id).subscribe((customer) => {
      this.originalCustomer = cloneDeep(customer);
      this.customer = customer;
    },
    () => {
      this.router.navigate([`home`]);
    })
  }

  private hasCustomerFieldsChanged(): boolean {
    return !(this.customer.firstName === this.originalCustomer.firstName
    && this.customer.lastName === this.originalCustomer.lastName
    && this.customer.emailAddress === this.originalCustomer.emailAddress
    && isEqual(this.customer.dob, this.originalCustomer.dob));
}

  private navigateOnSuccess(): void {
    this.snackbar.open("Customer successfully updated.")
    this.router.navigate([`home`])
  }
}