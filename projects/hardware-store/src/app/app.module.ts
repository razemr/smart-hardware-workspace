import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StorefrontComponent } from './pages/storefront/storefront.component';

@NgModule({
  declarations: [
    AppComponent,
    StorefrontComponent,

    ProductCardComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'NOK'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
