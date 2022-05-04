import { Component, Input} from '@angular/core';
import { Product } from 'product-lib';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'hws-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private shoppingCardService: ShoppingCartService) {}

  onClick(): void {
    this.shoppingCardService.addItem(this.product);
  }
}
