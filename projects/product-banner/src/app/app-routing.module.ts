import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedProductsComponent } from './modules/recommended-products/recommended-products.component';

const routes: Routes = [
  {
    path: 'recommended',
    loadChildren: () =>
      import('./modules/recommended-products/recommended-products.module').then(
        (m) => m.RecommendedProductsModule
      ),
  },
  {
    path: '',
    redirectTo: 'recommended',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
