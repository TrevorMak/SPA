import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { OrderInfoComponent } from './order-info.component';
import { FormGroup } from '@angular/forms';
import { Order } from '../../entities/order';
import { Customer } from 'src/app/customers/customers/entities/customer';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements AfterViewInit {

  @ViewChild(OrderInfoComponent, {static: false})
  public orderInfo: OrderInfoComponent;

  @Input()
  public order: Order;

  @Input()
  public customer: Customer;

  public orderForm: FormGroup = new FormGroup({});

  @Output()
  public formUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isValid: boolean = false;

  @Output()
  public isValidChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngAfterViewInit(): void {

    Promise.resolve(this.orderForm).then((form) => {
      this.orderForm.addControl("orderInfo", this.orderInfo.orderInfoForm)
      this.isValid = form.valid;
    })

    this.orderForm.statusChanges.subscribe((status: any) => 
    {
      this.isValid = this.orderForm.status === "VALID";
      if (this.orderForm.dirty)
      {
        this.formUpdated.emit(true);
      }
      this.isValidChange.emit(this.isValid);
    })
  }

}
