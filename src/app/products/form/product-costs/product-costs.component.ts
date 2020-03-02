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

  @Input()
  public productsCosts: Array<ProductCost>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((products) =>
    {
      this.products = products;
    })
  }

}
