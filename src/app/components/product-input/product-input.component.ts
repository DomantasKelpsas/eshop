import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NewProduct } from '../../models/new-product';
import { ProductCategory } from '../../models/product-category.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.scss']
})
export class ProductInputComponent implements OnInit {

  @Output()
  addButtonClick = new EventEmitter<NewProduct>();

  product = new NewProduct();

  categoryEnum = ProductCategory;

  constructor() {
    this.product.category = ProductCategory.NotSpecified;
  }

  ngOnInit(): void {
  }

  onAddButtonClick(): void {
    this.addButtonClick.emit(this.product);
  }

  onSubmit(form: NgForm): void {
    form.resetForm();
    this.product.category = ProductCategory.NotSpecified;
  }

}
