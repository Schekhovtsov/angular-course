import {
  Component,
  ChangeDetectionStrategy, Input, Output, EventEmitter,
} from '@angular/core';
import { IProduct } from '../../shared/mocks/interfaces';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() public product: IProduct;

  @Output() public addToCart = new EventEmitter();

  public addToCartHandler = (product: IProduct) => {
    this.addToCart.emit(product);
  }
}
