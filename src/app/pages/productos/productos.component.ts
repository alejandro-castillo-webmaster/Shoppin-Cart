import { Component, OnInit } from '@angular/core';
import { products, productsShoppingCart } from 'src/app/interfaces/products';
import { AlertsService } from 'src/app/services/alerts.service';
import { CarritoCompraService } from 'src/app/services/carrito-compra.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {



  public carritoCompra: any = [];
  public productos: products[] = [
    { "id": 1, "nombre": "Portátil", "precio": 1000, "iva": 0.21, "inventario": 5, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 2, "nombre": "Movil", "precio": 1000, "iva": 0.1, "inventario": 6, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 3, "nombre": "Televisor 23", "precio": 1000, "iva": 0.04, "inventario": 8, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 4, "nombre": "Televisor 33", "precio": 108, "iva": 0.1, "inventario": 5, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 5, "nombre": "Mp3", "precio": 26, "iva": 0.1, "inventario": 9, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 6, "nombre": "Televisor 65", "precio": 1050, "iva": 0.04, "inventario": 10, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 7, "nombre": "Televisor 40", "precio": 350, "iva": 0.21, "inventario": 5, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 8, "nombre": "Mando generico", "precio": 25, "iva": 0.1, "inventario": 15, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 9, "nombre": "Cocina de gas", "precio": 1050, "iva": 0.1, "inventario": 56, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 10, "nombre": "Cocina electrica", "precio": 600, "iva": 0.04, "inventario": 51, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 11, "nombre": "Calentador", "precio": 500, "iva": 0.04, "inventario": 15, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 12, "nombre": "Termostato", "precio": 280, "iva": 0.21, "inventario": 25, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 13, "nombre": "Horno de luz", "precio": 350, "iva": 0.21, "inventario": 65, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 14, "nombre": "Horno de gas", "precio": 400, "iva": 0.1, "inventario": 5, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 15, "nombre": "Horno de leña", "precio": 450, "iva": 0.1, "inventario": 55, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 16, "nombre": "Estufa eléctrica", "precio": 45, "iva": 0.1, "inventario": 45, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 17, "nombre": "Estufa de gas", "precio": 150, "iva": 0.1, "inventario": 15, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 18, "nombre": "Estufa de leña", "precio": 550, "iva": 0.1, "inventario": 85, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 19, "nombre": "Estufa de carbón", "precio": 650, "iva": 0.1, "inventario": 95, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" },
    { "id": 20, "nombre": "Caldera", "precio": 5000, "iva": 0.1, "inventario": 65, "url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/tv-2223047_960_720.png" }
  ];



  constructor(
    public carritoCompraService: CarritoCompraService,
    public alertService: AlertsService
    ) {

  }

  ngOnInit(): void {
    // We check we have shopping Cart Data
    let tempCarritoCompra: (any | string) = localStorage.getItem("carritoCompra");
    if (tempCarritoCompra) {
      this.carritoCompra = JSON.parse(tempCarritoCompra);
    }

  }

  // We add a new item in the shopping cart
  addShoppingCart(item: products) {

    // Destructure de item for  bulid a new object, we need only 4 parameters 
    let { id, nombre, precio, url, iva } = item;
    let tempItem: productsShoppingCart = {
      'id': id,
      'nombre': nombre,
      'precio': precio,
      "iva": iva,
      'url': url,
      'uds': 1,
      'precioUds':precio
    }
    //console.log(tempItem);
    localStorage.setItem('newItem', '1')

    //We send to service
    let value = this.carritoCompraService.setStorage(tempItem);

    // We show the succes or error to add product to the shopping cart
    if(value){
      this.alertService.correct(tempItem.nombre);
    } else {
      this.alertService.error(tempItem.nombre);
    }

  }

  ////
}
