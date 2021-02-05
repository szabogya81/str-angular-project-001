import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Observable<Product[]> = this.productService.getAll();

  constructor(private config: ConfigService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onUpdate(movies: Product): void {
    this.productService.update(movies);
  }

  onDelete(movies: Product): void {
    this.productService.remove(movies);
  }

}
