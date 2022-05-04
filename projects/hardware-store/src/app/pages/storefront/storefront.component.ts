import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { Product } from 'product-lib';
import { ProductService } from 'product-lib';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'hws-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss'],
})
export class StorefrontComponent implements AfterViewInit {
  @ViewChild('search') searchInput: ElementRef;

  products$: Observable<Product[]>;
  search: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.q) {
        this.searchInput.nativeElement.value = params.q;
        this.getProducts(params.q);
      } else {
        this.getProducts('');
      }
    });

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap((text) => {
          this.getProducts(this.searchInput.nativeElement.value);
        })
      )
      .subscribe();
  }

  private getProducts(q: string) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {q}, 
        queryParamsHandling: 'merge',
      });
    this.products$ = this.productService.getProducts(q);
  }
}
