import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ConfigService, IMovTable } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  categoryId = 0;
  filterStr: string = '';
  products = this.productService.getAll(this.categoryId, this.filterStr);

  cols: IMovTable[] = this.config.movTableCols;

  constructor(
    private config: ConfigService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(movies: Product): void {
    this.productService.update(movies);
  }

  onDelete(movies: Product): void {
    this.productService.remove(movies);
  }


}
