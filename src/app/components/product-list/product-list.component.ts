import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import {ProductService} from './../../services/product.service';
import {NewProduct} from '../../models/new-product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    }, error => {
      console.error(error);
      this.errorMessage = error.message;
    });
  }
  onAddButtonClick(product: NewProduct): void {
    this.productService.addProduct(product)
      .subscribe(savedProduct => {
        console.log(savedProduct);
        this.products.push(savedProduct);
      });
  }
}



