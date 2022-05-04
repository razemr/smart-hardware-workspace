import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendedProductsComponent } from './recommended-products.component';

const routes: Routes = [
  {
    path: '',
    component: RecommendedProductsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [RecommendedProductsComponent],
  providers: [],
})
export class RecommendedProductsModule {}
