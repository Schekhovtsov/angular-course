import {
  Component,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { ICartProduct } from '../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() public product: ICartProduct;

  @Output() public addToCart = new EventEmitter();

  public addToCartHandler = (product: ICartProduct) => {
    this.addToCart.emit(product);
  }
}
