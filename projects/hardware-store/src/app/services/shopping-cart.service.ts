import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { map, pluck } from 'rxjs/operators';
import { Product } from 'product-lib';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart$: BehaviorSubject<ShoppingCart>;

  constructor() {
    this.shoppingCart$ = new BehaviorSubject<ShoppingCart>({
      items: [],
      subTotal: 0,
      discount: 0,
      total: 0,
    });
  }

  private setShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCart$.next(shoppingCart);
  }

  addItem(product: Product) {
    const shoppingCart = { ...this.shoppingCart$.value };
    let existing = false;

    shoppingCart.items = shoppingCart.items.map((item) => {
      if (product.id === item.id) {
        existing = true;
        item.quantity++;
      }
      return item;
    });

    if (!existing) {
      shoppingCart.items.push({
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        discount: product.discount,
      });
    }

    this.setShoppingCart(shoppingCart);
  }

  deleteItem(id: number) {
    const shoppingCart = { ...this.shoppingCart$.value };
    shoppingCart.items = shoppingCart.items
      .map((item) => {
          if(item.id === id) {
              item.quantity--;
          }
          return item;
      })
      .filter((item) => item.quantity > 0);
    this.setShoppingCart(shoppingCart);
  }

  getItems(): Observable<ShoppingCartItem[]> {
    return this.shoppingCart$.pipe(pluck('items'));
  }

  getSubTotal(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((cart) => {
        const subTotal = cart?.items
          .map((item) => item.quantity * item.price)
          .reduce((prev, curr) => prev + curr, 0);
        return subTotal;
      })
    );
  }

  getDiscount(): Observable<number> {
    return this.shoppingCart$.pipe(
      map((cart) => {
        const discount = cart?.items
          .map((item) => item.quantity * item.discount)
          .reduce((prev, curr) => prev + curr, 0);
        return discount;
      })
    );
  }
}
