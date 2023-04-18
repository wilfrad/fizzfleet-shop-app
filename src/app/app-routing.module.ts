import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductViewComponent } from './pages/catalog/single-product/product-view.component';

const header: string = 'FizzFleet Shop - ';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: header + 'Inicio', component: HomeComponent },
  { path: 'catalog', title: header + 'Catalogo', component: CatalogComponent },
  { path: 'catalog/:id', title: header + 'Publicación', component: ProductViewComponent },
  { path: 'payment/:id', title: header + 'Pedido N#', component: PaymentComponent },
  { path: 'contact', title: header + 'Contactenos', component: ContactComponent },
  { path: '**', title: header + 'No encontrado', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }