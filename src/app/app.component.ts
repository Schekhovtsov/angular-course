import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { cartProduct, ICartProduct } from '../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public myTitle = 'Angular 10';
  public mySideNav: MatDrawer;
  public terminalMessage: string;
  public product: ICartProduct = cartProduct;
  public cart = [];

  public setSideNav = (drawer: MatDrawer) => {
    this.mySideNav = drawer;
  }

  public increment = () => {
    this.terminalMessage = 'Увеличение количества товара';
    this.product.count++;
  }

  public decrement = () => {
    this.terminalMessage = 'Уменьшение количества товара';
    if (this.product.count === 1) {
      return;
    }
    this.product.count--;
  }

  public addToCartHandler = (product: ICartProduct) => {
    this.terminalMessage = `Добавили в корзину ${product.name}`;
    this.cart.push(product);
  }
}
