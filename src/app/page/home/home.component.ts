import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  categoryId = 0;
  filterStr: string = '';

  products = this.service.getAll(this.categoryId, this.filterStr);
  saleProducts = this.service.getSaleProducts();
  featuredProducts = this.service.getRandomFeaturedProducts();

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }
}
