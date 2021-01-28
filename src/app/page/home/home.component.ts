import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  filterStr: string = '';
  products = this.service.getProducts(0, this.filterStr);
  saleProducts = this.products.filter(p => p.salePrice).slice(0, this.config.topSaleCount);
  featuredProducts = this.products.filter(p => p.featured).slice(0, this.config.topFeaturedCount);
  
  constructor(private config: ConfigService, private service: ProductService) { }

  ngOnInit(): void {
  }
}
