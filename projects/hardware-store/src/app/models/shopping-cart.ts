import { ShoppingCartItem } from "./shopping-cart-item";

export interface ShoppingCart {
    items: ShoppingCartItem[];
    subTotal: number;
    discount: number;
    total: number;
}