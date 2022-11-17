import { Component, OnInit } from '@angular/core';
import { productsShoppingCart } from 'src/app/interfaces/products';
import { CarritoCompraService } from 'src/app/services/carrito-compra.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  public shoppingCart: productsShoppingCart[] = [];
  public totalPrice: number = 0;
  public totalUds: number = 0;
  public iva: number = 0;

  constructor(public carritoCompraService: CarritoCompraService) { }


  ngOnInit(): void {

    localStorage.setItem('newItem', '1')
    this.getShopingCart();
    setInterval(() => {
      this.getShopingCart();
    }, 1000);

  }


  // We get the Shopping Cart
  getShopingCart() {

    // We check if we have a new items, if don't have new items, we will breack the function for load shoppin cart
    if(localStorage.getItem('newItem') !== '1') {
      return;
    }

    this.shoppingCart = [];
    this.totalPrice = 0;
    this.totalUds = 0;
    this.iva = 0;


    this.shoppingCart = this.carritoCompraService.getStorage();

    // console.log(this.shoppingCart);
    // If the shoppingCart isn't empty
    if (this.shoppingCart) {

      this.shoppingCart.forEach((value) => {
        this.totalPrice = this.totalPrice + value.precio;
        this.totalUds = this.totalUds + value.uds;
        this.iva = this.iva + value.precio * value.iva;
      });

    }

    localStorage.setItem('newItem', '0')

  }

  // We delete item from shoppingCart
  delete(item: productsShoppingCart) {

    for (let i = 0; i < this.shoppingCart.length; i++) {

      if (this.shoppingCart[i].id == item.id) {
        this.shoppingCart.splice(i, 1)
        localStorage.setItem('carritoCompra', '');
        localStorage.setItem('carritoCompra', JSON.stringify(this.shoppingCart));
        localStorage.setItem('newItem', '1')
        return;
      }

    }

  }


  // Whe change the number of items in shopingcard
  changeValue(item: productsShoppingCart, operation: string) {

    // We search item in shopping cart
    for (let i = 0; i < this.shoppingCart.length; i++) {

      // When wh have found this item in a shopping cart
      if (this.shoppingCart[i].id == item.id) {

        // When we have more than 1 item in a shopping cart, we hace 2 options, 1 more or 1 less
        if (item.uds != 1) {

          if (operation == "-") {
            this.shoppingCart[i].uds = this.shoppingCart[i].uds - 1;
            this.shoppingCart[i].precio = this.shoppingCart[i].precio - this.shoppingCart[i].precioUds!;
          }

          if (operation == "+") {
            this.shoppingCart[i].uds = this.shoppingCart[i].uds + 1;
            this.shoppingCart[i].precio = this.shoppingCart[i].precio + this.shoppingCart[i].precioUds!;
          }

          localStorage.setItem('carritoCompra', '');
          localStorage.setItem('carritoCompra', JSON.stringify(this.shoppingCart));
          localStorage.setItem('newItem', '1')
          return;

        }

        // When we have only 1 item in a shopping cart, we hace 2 options, 1 more or delete
        if (item.uds == 1) {

          if (operation == "-") {
            this.shoppingCart.splice(i, 1)
          }

          if (operation == "+") {
            this.shoppingCart[i].uds = this.shoppingCart[i].uds + 1;
            this.shoppingCart[i].precio = this.shoppingCart[i].precio + this.shoppingCart[i].precioUds!;
          }

          localStorage.setItem('carritoCompra', '');
          localStorage.setItem('carritoCompra', JSON.stringify(this.shoppingCart));
          localStorage.setItem('newItem', '1')
          return;

        }

      }

    }

  }
  ///////
}
