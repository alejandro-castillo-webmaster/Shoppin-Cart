import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ProductosComponent,
  ],
  exports: [
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
