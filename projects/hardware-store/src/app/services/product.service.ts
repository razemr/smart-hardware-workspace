import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  _limit: number = 20;

  constructor(private httpClient: HttpClient) {}

  getProducts(q: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `http://localhost:8080/products?q=${q}&_limit=${this._limit}`
    );
  }
}
