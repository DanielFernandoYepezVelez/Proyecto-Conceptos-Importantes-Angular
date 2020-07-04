import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
})
export class NgStyleComponent implements OnInit {
  tamano = 3;
  colorVariable = 'gray';

  constructor() {}

  ngOnInit(): void {}
}
