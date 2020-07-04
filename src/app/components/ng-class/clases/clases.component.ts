import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-warning';
  alertaDos: string;
  loading = false;
  propiedades: object | any = {
    entrega: true,
    button: false,
  };

  constructor() {}

  ngOnInit(): void {}

  uno(e) {
    e.preventDefault();
    this.alertaDos = 'alert-success';
  }

  dos(e) {
    e.preventDefault();
    this.alertaDos = 'alert-info';
  }

  cambiarColor(e) {
    e.preventDefault();
    this.propiedades.button = !this.propiedades.button;
  }

  ejecutar(e) {
    e.preventDefault();
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}
