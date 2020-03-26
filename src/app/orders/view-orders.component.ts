import { Component, OnInit } from '@angular/core';
import { Order } from './entities/order';
import { OrderService } from './services/order-service';

@Component({
  selector: 'app-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  public orders: Array<Order>;

  ngOnInit() {
    this.orderService.getAll().subscribe((x) => {
      this.orders = x});
      //TODO add error
  }
}
