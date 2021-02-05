import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface IMovTable {
  key: string;
  text: string;
  editable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Movie Store';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'DVD', link: '/cat01'},
    {text: 'Bluray', link: '/cat02'},
    {text: 'Admin', link: '/admin'},
  ];

  movTableCols: IMovTable[] = [
      { key: 'id', text: '#', editable: false},
      { key: 'catId', text: 'Category ID', editable: true},
      { key: 'name', text: 'Name', editable: true},
      { key: 'description', text: 'Description', editable: true},
      { key: 'image', text: 'Image URL', editable: true},
      { key: 'price', text: 'Price', editable: true},
      { key: 'stock', text: 'Stock', editable: true},
      { key: 'featured', text: 'Featured', editable: true},
      { key: 'active', text: 'Active', editable: true}
  ];

  topSaleCount = 5;
  topFeaturedCount = 5;
  productsUrl = 'http://localhost:3000/products';

  constructor() { }
}
