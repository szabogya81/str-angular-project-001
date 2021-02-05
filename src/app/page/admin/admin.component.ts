import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  categoryId = 0;
  filterStr: string = '';

  products: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    this.products = this.productService.getAll(this.categoryId, this.filterStr);
  } 

  onUpdate(movie: Product): void {
    this.productService.update(movie).subscribe();
  }

  onDelete(movie: Product): void {
    this.productService.remove(movie).subscribe(() => this.setProducts());
  }
}
