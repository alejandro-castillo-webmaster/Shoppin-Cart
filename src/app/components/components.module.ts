import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';



@NgModule({
  declarations: [
    CarritoCompraComponent
  ],
  exports: [
    CarritoCompraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
