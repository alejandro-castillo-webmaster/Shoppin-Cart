import { Injectable } from '@angular/core';
import { productsShoppingCart } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  private carritoCompra: productsShoppingCart[] = [];

  constructor() { }

  // We load the shopping cart
  getStorage() {

    let tempShoppingCart: (any | string) = localStorage.getItem('carritoCompra');
    let shoppingCart: productsShoppingCart[] = tempShoppingCart;
    return shoppingCart = JSON.parse(tempShoppingCart);

  }
  
  // Seteamos el valor en el localStorage
  setStorage(item: productsShoppingCart) {

    // We get carritode compra value
    let shoppingCart: (any | string) = localStorage.getItem('carritoCompra');
    shoppingCart = JSON.parse(shoppingCart);
    // If is null, we insert the first value
    // Isn't null, we need more values
    if (shoppingCart !== null) {


      for (var i = 0, iLen = shoppingCart.length; i < iLen; i++) {
        // Isn't a new value, we change quantity of products and prize
        if (shoppingCart[i].id == item.id) {
          shoppingCart[i].uds = shoppingCart[i].uds + 1;
          shoppingCart[i].precio = shoppingCart[i].precio + item.precio;
          localStorage.setItem('carritoCompra', JSON.stringify(shoppingCart));
          return true;
        }
      }

      // If a new value, we insert this value
      shoppingCart.push(item);
      localStorage.setItem('carritoCompra', JSON.stringify(shoppingCart));
      return true;

    }
    else {

      // We insert the first value
      this.carritoCompra.push(item);
      localStorage.setItem('carritoCompra', JSON.stringify(this.carritoCompra));
      
    }

    return true;
  }

  ////

}
