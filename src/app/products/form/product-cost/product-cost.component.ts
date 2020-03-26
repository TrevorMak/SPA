import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, FormArray} from '@angular/forms';
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
  public allProducts: Array<ProductCost>;

  public form: FormGroup;

  @Input()
  public productsCosts: Array<ProductCost>;

  public productControl = new FormControl();

  public filteredOptions: Observable<Array<ProductCost>>

  @Input()
  public productCostsForm: FormArray;

  public ngOnInit() {

    this.filteredOptions = this.productControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.product.name),
        map(name => name ? this._filter(name) : this.productsCosts.slice())
      );

    this.form = new FormGroup ({});
    this.productCostsForm.push(this.form);
    this.form.addControl('productCost', this.productControl);
  }

  public setProductCost(option: ProductCost) {
    this.productControl.setValue(option);
  }

  displayFn(productCost: ProductCost): string {
    return productCost && productCost.product.name ? productCost.product.name : '';
  }

  private _filter(name: string): Array<ProductCost> {
    const filterValue = name.toLowerCase();

    return this.productsCosts.filter(option => option.product.name.toLowerCase().indexOf(filterValue) === 0);
  }
}