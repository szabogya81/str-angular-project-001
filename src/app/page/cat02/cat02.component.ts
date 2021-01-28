import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  filterStr: string = '';
  products = ProductService.getProducts(2, this.filterStr);
  featuredProducts = this.products.filter(p => p.featured).slice(0, ProductService.topFeaturedCount);

  constructor() { }

  ngOnInit(): void {
  }

}
