import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Input() public product: ICartProduct;

  @Output() public increment = new EventEmitter();

  @Output() public decrement = new EventEmitter();

  public stars = 5;
  //
  // constructor() {
  //   this.stars = new Array(Math.ceil(this.product.rating)).fill(true);
  // }

  public incrementHandler = () => {
    this.increment.emit();
  }

  public decrementHandler = () => {
    this.decrement.emit();
  }
}
