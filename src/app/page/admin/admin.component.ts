import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  filterStr: string = '';
  products = this.service.getProducts(0, this.filterStr);

  constructor(private config: ConfigService, private service: ProductService) { }

  ngOnInit(): void {
  }

}
