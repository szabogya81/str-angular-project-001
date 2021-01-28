import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Array<Product>;
  filterStr: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(event: Event): void {
    this.filterStr = (event.target as HTMLInputElement).value;
  }
}
