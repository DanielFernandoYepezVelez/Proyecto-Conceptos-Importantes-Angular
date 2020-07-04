import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((parametros: any) => {
      console.log(
        'Parametros Padre Desde El Mismo Padre',
        `${parametros.idUser}`
      );
    });
  }

  ngOnInit(): void {}
}
