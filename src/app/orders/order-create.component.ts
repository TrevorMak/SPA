import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customers/customers/entities/customer';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class CreateOrderComponent implements OnInit {

  public customer: Customer;

  public constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.customer = window.history.state.customer;
  }

}
