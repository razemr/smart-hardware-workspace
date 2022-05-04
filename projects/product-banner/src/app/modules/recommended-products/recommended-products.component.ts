import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product, ProductService } from 'product-lib';

@Component({
  selector: 'prb-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss'],
})
export class RecommendedProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  selectedProduct: Product = {
    id: 0,
    name: '',
    description: '',
    defaultImage: '',
    price: 0,
    discount: 0,
  };
  timer: any;
  index: number = 0;

  @Output() addProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  async ngOnInit(): Promise<void> {
    this.products = await this.productService
      .getRecommendedProducts()
      .toPromise();
    this.selectedProduct = this.products[0];

    this.timer = setInterval(() => {
      this.index === this.products.length - 1 ? (this.index = 0) : this.index++;
      this.selectedProduct = this.products[this.index];
    }, 10000);
  }

  onClick() {
    this.addProduct.emit(this.selectedProduct);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
