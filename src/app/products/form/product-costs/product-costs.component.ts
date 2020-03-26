import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product';
import { ProductCost } from '../../entities/product-cost';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-costs',
  templateUrl: './product-costs.component.html',
  styleUrls: ['./product-costs.component.scss']
})
export class ProductCostsComponent implements OnInit {

  public products: Array<Product> = new Array<Product>();

  public 

  @Input()
  public productsCosts: Array<ProductCost>;

  public productCostsForm: FormArray = new FormArray([]);

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products;

      for (let product of this.products)
      {
        const newProductCost = new ProductCost();
        newProductCost.product = product;
        newProductCost.productId = product.id;
        this.productsCosts.push(newProductCost);
      }
    })
  }

  public addProductCost() {

    this.productsCosts.push(new ProductCost());
  }

}
