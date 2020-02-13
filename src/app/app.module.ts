import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from './customers/customers/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './menu/header/header.component';
import { OrderComponent } from './orders/entities/order/order.component';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/';
import { CreateCustomerComponent } from './customers/customers/create-customer.component';
import { CustomerFormComponent } from './customers/customers/form/customer-form.component';
import { CustomerInfoComponent } from './customers/customers/form/customer-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './customers/customers/view-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomersComponent,
    HeaderComponent,
    OrderComponent,
    CreateCustomerComponent,
    CustomerFormComponent,
    CustomerInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    CustomerService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
