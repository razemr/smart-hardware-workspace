import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorefrontComponent } from './pages/storefront/storefront.component';

const routes: Routes = [
  {
    path: 'store',
    component: StorefrontComponent,
  },
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: 'recommended',
    loadChildren: () =>
      import('productBanner/Module').then((m) => m.RecommendedProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
