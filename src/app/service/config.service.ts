import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
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
  ];

  topSaleCount = 5;
  topFeaturedCount = 5;
  productsUrl = 'http://localhost:3000/products';

  constructor() { }
}
