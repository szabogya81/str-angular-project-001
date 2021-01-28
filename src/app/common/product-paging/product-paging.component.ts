import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-paging',
  templateUrl: './product-paging.component.html',
  styleUrls: ['./product-paging.component.scss']
})
export class ProductPagingComponent implements OnInit {

  @Input() products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
