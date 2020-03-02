import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductCost } from '../../entities/product-cost';
import { Product } from '../../entities/product';

@Component({
  selector: 'app-product-cost',
  templateUrl: './product-cost.component.html',
  styleUrls: ['./product-cost.component.scss']
})
export class ProductCostComponent implements OnInit {

  @Input()
  public products: Array<Product>

  public myForm: FormGroup;

  public productCosts: Array<ProductCost> = new Array<ProductCost>();

  public productControl = new FormControl();

  public filteredOptions: Observable<Array<ProductCost>>

  public ngOnInit() {

    for (let product of this.products)
    {
      const newProductCost = new ProductCost();
      newProductCost.product = product;
      this.productCosts.push(newProductCost);
    }

    this.filteredOptions = this.productControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.product.name),
        map(name => name ? this._filter(name) : this.productCosts.slice())
      );
  }

  displayFn(productCost: ProductCost): string {
    return productCost && productCost.product.name ? productCost.product.name : '';
  }

  private _filter(name: string): Array<ProductCost> {
    const filterValue = name.toLowerCase();

    return this.productCosts.filter(option => option.product.name.toLowerCase().indexOf(filterValue) === 0);
  }
}