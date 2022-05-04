import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'hws-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  items$: Observable<ShoppingCartItem[]>;
  subTotal$: Observable<number>;
  discount$: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.items$ = this.shoppingCartService.getItems();
    this.subTotal$ = this.shoppingCartService.getSubTotal();
    this.discount$ = this.shoppingCartService.getDiscount();
  }

  deleteItem(id: number) {
    this.shoppingCartService.deleteItem(id);
  }
}
