import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe((parametros: any) => {
      console.log(
        'Parametros Del Padre Capturados Por La Ruta Hija',
        `${parametros.idUser}`
      );
    });
  }

  ngOnInit(): void {}
}
