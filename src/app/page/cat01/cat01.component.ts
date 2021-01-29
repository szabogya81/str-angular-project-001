import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})

export class Cat01Component implements OnInit {
  filterStr: string = '';
  products = this.service.getProducts(1, this.filterStr);
  featuredProducts = this.products.filter(p => p.featured).slice(0, this.config.topFeaturedCount);

  constructor(private config: ConfigService, private service: ProductService) { }

  ngOnInit(): void {
  }
}
