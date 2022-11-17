import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SharedModule { }
