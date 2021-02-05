import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

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

=======
  @Input() products: Observable<Product[]>;
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();


  cols: IMovTable[] = this.config.movTableCols;

  constructor(
    private config: ConfigService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts () {
    this.products = this.productService.getAll(this.categoryId, this.filterStr);

  onUpdate(movies: Product): void {
    this.updateClick.emit(movies);
  }

  onDelete(movies: Product): void {
    this.deleteClick.emit(movies);
}
