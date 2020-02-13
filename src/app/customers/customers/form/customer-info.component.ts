import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../entities/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BindableFormControl } from 'src/shared/bindable-form-control';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  public customerInfoForm: FormGroup

  @Input()
  public customer: Customer;

  public firstName: FormControl;

  public lastName: FormControl;

  public email: FormControl;

  constructor() { }

  ngOnInit() {
    this.firstName = new BindableFormControl(this.customer, "firstName");
    this.firstName.setValidators([ Validators.required, Validators.maxLength(50) ])

    this.lastName = new BindableFormControl(this.customer, "lastName");
    this.lastName.setValidators([ Validators.required, Validators.maxLength(50) ])

    this.email = new BindableFormControl(this.customer, "email");
    //Potentially add a custom validator using regex so we can define our own email formats.
    this.email.setValidators([ Validators.required, Validators.maxLength(50), Validators.email ])

    this.customerInfoForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }

}
