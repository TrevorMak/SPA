import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Order } from './entities/order';
import { OrderFormComponent } from './form/order-form/order-form.component';

export abstract class BaseOrderPage {

  public order: Order;

  @ViewChild("orderForm", {static: false})
  public orderFormComponent: OrderFormComponent;

  public canSave: boolean = false;

  public isFormUpdated: boolean = false;

  protected constructor(private cdr: ChangeDetectorRef) { }

  public formStatusChange(): void {
    this.setCanSaveOrder();
  }

  public abstract saveOrder(): void;

  public formUpdated(updated: boolean): void {
    this.isFormUpdated = updated;
    this.setCanSaveOrder();
  }

  private setCanSaveOrder() {
    this.canSave = this.orderFormComponent.isValid && this.isFormUpdated;
    this.cdr.detectChanges();
  }
}
