import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  montoConvertido: number = 0;
  montoEnQuetzales: number = 0;
  divisa: string = '';
  constructor() {}

  convertirMontoQuetzales() {

    switch (this.divisa) {
      case 'dolares':
        this.montoConvertido = this.montoEnQuetzales / 8; // Conversión a dólares
        break;
      case 'euros':
        this.montoConvertido = this.montoEnQuetzales / 9; // Conversión a euros (ejemplo)
        break;
      case 'pesoMexicano':
        this.montoConvertido  = this.montoEnQuetzales * 2.25;; // Conversión a pesos mexicanos (ejemplo)
        break;
      default:
        console.error('Divisa no soportada');
        this.montoConvertido = 0;
        break;
    }
  }

}
