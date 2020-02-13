import { Component, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from './entities/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss']
})
export class ViewCustomersComponent implements OnInit {

  constructor(public customerService: CustomerService) { }

  public customers: Array<Customer>;

  ngOnInit() {
    this.customerService.getAll().subscribe((x) => {
      this.customers = x});
      //TODO add error
  }

}
