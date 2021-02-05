import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../model/product';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  getAll(categoryId: number = 0, filterStr: string = ''): Observable<Product[]> {
    let url: string = this.config.productsUrl;

    if (categoryId > 0) {
      url = !filterStr ? `${url}?catId=${categoryId}` : `${url}?catId=${categoryId}&name_like=${filterStr}`;
    } else if (filterStr) {
      url = `${url}?name_like=${filterStr}`;
    }

    return this.http.get<Product[]>(url);
  }

  getSaleProducts(): Observable<Product[]> {
    let url: string = `${this.config.productsUrl}?salePrice_gte=0&_start=1&_limit=${this.config.topSaleCount}`;

    return this.http.get<Product[]>(url);
  }

  getRandomFeaturedProducts(categoryId: number = 0) : Observable<Product[]> {
    let url: string = `${this.config.productsUrl}?featured=true`;
    if(categoryId > 0) {
      url = `${url}&catId=${categoryId}`;
    }
    
    return this.http.get<Product[]>(url)
      .pipe(
            map(
                p => 
                  p.sort(() => 0.5 - Math.random())
                   .slice(0, this.config.topFeaturedCount)
            )
      );
  }

  update(movie: Product): Array<Product> {
    return;
  };

  remove(movie: Product): Array<Product> {
    return;
  };

}
