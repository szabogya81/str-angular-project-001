import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ConfigService, IMovTable } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  categoryId = 0;
  filterStr: string = '';

  @Input() products: Observable<Product[]>;
  @Output() updateClick: EventEmitter<Product> = new EventEmitter();
  @Output() deleteClick: EventEmitter<Product> = new EventEmitter();


  cols: IMovTable[] = this.config.movTableCols;

  constructor(
    private config: ConfigService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(movie: Product): void {
    this.updateClick.emit(movie);
  }

  onDelete(movie: Product): void {
    this.deleteClick.emit(movie);
  }
}
