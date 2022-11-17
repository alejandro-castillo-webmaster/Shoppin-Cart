// Interfaces

export interface products {
    id: number;
    nombre: string;
    precio: number;
    inventario: number;
    url: string;
    iva: number;
}

export interface productsShoppingCart {
    id: number;
    nombre: string;
    precio: number;
    url: string;
    uds: number;
    precioUds?: number;
    iva: number;
}