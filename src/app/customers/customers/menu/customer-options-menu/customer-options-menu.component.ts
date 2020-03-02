import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { MenuOption } from '../../entities/menu-option';
import { ConfirmDialogComponent } from 'src/app/shared/options/dialog/confirm/confirm-dialog/confirm-dialog.component';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../entities/customer';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-customer-options-menu',
  templateUrl: './customer-options-menu.component.html',
  styleUrls: ['./customer-options-menu.component.scss']
})
export class CustomerOptionsMenuComponent implements OnInit {

  protected createOrderMenukey: string = "CreateOrder";
  protected deleteCustomerKey: string = "Delete";
  protected editCustomerKey: string = "Edit";

  @Input()
  public customer: Customer;

  @Output()
  public customerRemovedById: EventEmitter<number> = new EventEmitter<number>();

  public menuOptions: Array<MenuOption> = new Array<MenuOption>();

  public constructor(private dialog: MatDialog,
    private customerService: CustomerService,
    private matSnackbar: MatSnackBar,
    private router: Router) { }
  
  protected addDeleteOption()
  {
    const deleteOption = {
      keyType: this.deleteCustomerKey,
      name: this.deleteCustomerKey
    } as MenuOption

    this.menuOptions.push(deleteOption);
  }

  protected addCreateOrderMenu()
  {
    const createOrderOption = {
      keyType: this.createOrderMenukey,
      name: "Create Order"
    } as MenuOption

    this.menuOptions.push(createOrderOption);
  }

  protected addEditCustomerOption()
  {
    const editCustomerOption = {
      keyType: this.editCustomerKey,
      name: this.editCustomerKey,
    } as MenuOption

    this.menuOptions.push(editCustomerOption);
  }

  public ngOnInit(): void {
    this.addDeleteOption();
    this.addEditCustomerOption();
    this.addCreateOrderMenu();
  }

  public reactForType(menuOption: MenuOption) {
    
    switch (menuOption.keyType) {
      case this.createOrderMenukey: {
        this.navigateToCreateOrderPage();
        break;
      }
      case this.deleteCustomerKey: {
        this.deleteCustomer();
        break;
      }
      case this.editCustomerKey: {
        this.editCustomer();
      }
    }
  }

  private navigateToCreateOrderPage(): void {
    this.router.navigate([`order-create`], { state: {'customer': this.customer} });
  }

  private deleteCustomer(): void {
    const deleteDialogRef = this.openDeleteDialog();

    deleteDialogRef.componentInstance.confirmClick.subscribe(() => {
      this.customerService.delete(this.customer.id).subscribe(() => {
        this.matSnackbar.open("Successfully deleted customer");
        this.customerRemovedById.emit(this.customer.id);
      },
      (error) => {
        this.matSnackbar.open("Failed to delete customer");
      });
    });
  }

  private openDeleteDialog(): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {
        textBody: "Are you sure you want to delete this customer?",
        title: "Delete Customer",
        confirmButtonText: "Delete"
      }
    })
  }

  private editCustomer(): void {
    this.router.navigate([`customer-manage/${this.customer.id}`])
  }
}
