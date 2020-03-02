import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerService } from './customers/customers/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './menu/header/header.component';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule, MatDialogModule, MatMenuModule, MatIconModule, MatAutocompleteModule } from '@angular/material/';
import { CreateCustomerComponent } from './customers/customers/create-customer.component';
import { CustomerFormComponent } from './customers/customers/form/customer-form.component';
import { CustomerInfoComponent } from './customers/customers/form/customer-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './customers/customers/view-customers.component';
import { CustomerOptionsMenuComponent } from './customers/customers/menu/customer-options-menu/customer-options-menu.component';
import { ConfirmDialogComponent } from './shared/options/dialog/confirm/confirm-dialog/confirm-dialog.component';
import { ManageCustomerComponent } from './customers/customers/customer-manage.component';
import { OrderFormComponent } from './orders/form/order-form/order-form.component';
import { ProductCostsComponent } from './products/form/product-costs/product-costs.component';
import { ProductCostComponent } from './products/form/product-cost/product-cost.component';
import { OrderInfoComponent } from './orders/form/order-form/order-info.component';
import { CreateOrderComponent } from './orders/order-create.component';
import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomersComponent,
    HeaderComponent,
    CreateCustomerComponent,
    CustomerFormComponent,
    CustomerInfoComponent,
    CustomerOptionsMenuComponent,
    ConfirmDialogComponent,
    ManageCustomerComponent,
    OrderFormComponent,
    OrderInfoComponent,
    ProductCostsComponent,
    ProductCostComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [
    CustomerService,
    ProductService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
