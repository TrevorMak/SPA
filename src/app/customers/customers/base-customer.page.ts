import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CustomerFormComponent } from './form/customer-form.component';
import { Customer } from './entities/customer';

export abstract class BaseCustomerPage {

  public customer: Customer;

  @ViewChild("customerForm", {static: false})
  public customerFormComponent: CustomerFormComponent;

  public canSave: boolean = false;

  public isFormUpdated: boolean = false;

  protected constructor(private cdr: ChangeDetectorRef) { }

  public formStatusChange(): void {
    this.setCanSaveCustomer();
  }

  public abstract saveCustomer(): void;

  public formUpdated(updated: boolean): void {
    this.isFormUpdated = updated;
    this.setCanSaveCustomer();
  }

  private setCanSaveCustomer() {
    this.canSave = this.customerFormComponent.isValid && this.isFormUpdated;
    this.cdr.detectChanges();
  }
}
