import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-suggested-product-card',
  templateUrl: './suggested-product-card.component.html',
})
export class SuggestedProductCardComponent {
  @Input() public product: ICartProduct;

  @Output() public goToProduct = new EventEmitter();

  public goToProductHandler = () => {
    this.goToProduct.emit();
    console.log('go to product');
  }
}
