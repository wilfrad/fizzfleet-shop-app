import { NgModule } from '@angular/core';
import { CartMinimalComponent } from './cart-min.component';
import { CartViewComponent } from './cart-view.component';

@NgModule({
  declarations: [ CartViewComponent, CartMinimalComponent ],
  exports: [
    CartComponent,
    CartMinimalComponent
  ],
})
export class CartComponent {

}
