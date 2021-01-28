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
  
  constructor() { }

  ngOnInit(): void {
  }
}
