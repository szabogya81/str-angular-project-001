import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterStr: string = '';
  products = ProductService.getProducts(0, this.filterStr);
  saleProducts = this.products.filter(p => p.salePrice).slice(0, ProductService.topSaleCount);
  featuredProducts = this.products.filter(p => p.featured).slice(0, ProductService.topFeaturedCount);
  
  constructor() { }

  ngOnInit(): void {
  }
}
