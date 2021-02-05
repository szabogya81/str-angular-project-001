import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})

export class Cat01Component implements OnInit {
  categoryId = 1;
  filterStr: string = '';

  products = this.service.getAll(this.categoryId, this.filterStr);
  featuredProducts = this.service.getRandomFeaturedProducts(this.categoryId);

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }
}
