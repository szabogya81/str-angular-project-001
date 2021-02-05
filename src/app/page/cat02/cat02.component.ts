import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})

export class Cat02Component implements OnInit {
  categoryId = 2;
  filterStr: string = '';

  products = this.service.getAll(this.categoryId, this.filterStr);
  featuredProducts = this.service.getRandomFeaturedProducts(this.categoryId);

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }
}
