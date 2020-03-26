import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../../entities/order';
import { BindableFormControl } from 'src/shared/bindable-form-control';
import { Customer } from 'src/app/customers/customers/entities/customer';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Input()
  public customer: Customer;

  public orderInfoForm: FormGroup

  @Input()
  public order: Order;

  public name: BindableFormControl<Order>;

  constructor() { }

  ngOnInit() {
    this.name = new BindableFormControl(this.order, "name");
    this.name.setValidators([Validators.required, Validators.maxLength(50)])

    this.orderInfoForm = new FormGroup({
      name: this.name,
    });
  }
}
