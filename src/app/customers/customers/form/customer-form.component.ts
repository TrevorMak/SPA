import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../entities/customer';
import { CustomerInfoComponent } from './customer-info.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements AfterViewInit {
  @ViewChild(CustomerInfoComponent, {static: false})
  public customerInfo: CustomerInfoComponent;

  @Input()
  public customer: Customer;

  public customerForm: FormGroup = new FormGroup({});

  @Output()
  public formUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isValid: boolean = false;

  @Output()
  public isValidChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngAfterViewInit(): void {

    // TODO further reading on why this is required
    Promise.resolve(this.customerForm).then((form) => {
      this.customerForm.addControl("customerInfo", this.customerInfo.customerInfoForm)
      this.isValid = form.valid;
    })

    this.customerForm.statusChanges.subscribe((status: any) => 
    {
      this.isValid = this.customerForm.status === "VALID";
      if (this.customerForm.dirty)
      {
        this.formUpdated.emit(true);
      }
      this.isValidChange.emit(this.isValid);
    })
  }

}
