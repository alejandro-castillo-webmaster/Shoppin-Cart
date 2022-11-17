import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  // Succes alert
  correct(nombre: string) {

    Swal.fire({
      title: 'Éxito',
      text: `Su producto ${ nombre } se ha añadido correctamente`,
      icon: 'success'
    })

    setTimeout(function () {
      Swal.close();
    }, 2000);

  }

  // Error alert
  error(nombre: string) {
    Swal.fire({
      title: 'Error',
      text: `Se ha producido un error al añadir el ${ nombre }`,
      icon: 'success'
    })

    setTimeout(function () {
      Swal.close();
    }, 2000);

  }


}
