import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  filterStr: string = '';
  products = ProductService.getProducts(1, this.filterStr);
  featuredProducts = this.products.filter(p => p.featured).slice(0, ProductService.topFeaturedCount);

  constructor() { }

  ngOnInit(): void {
  }

}
