import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/* ElementRef => Para Referenciar El Elemento Del Html, Que Le Voy A Aplicar El HTML */
/* HostListener => Para Escuchar Los Eventos Que Se Le Aplican A Los Elementos */

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  color: string;
  cursor: string;
  background: string;
  @Input('appResaltado') fondo: string;

  constructor(private elementHTML: ElementRef) {
    // this.elementHTML.nativeElement.style.backgroundColor = 'yellow';
    // console.log('Listo Para Combatir Con Una Directiva');
  }

  /* Conversion Para Los Argumentos De La Directiva Personalizada */
  conversionParaArgumentosVarios() {
    this.background = this.fondo.substr(0, 6);
    this.color = this.fondo.substr(6, 7);
    this.cursor = this.fondo.substring(14);
  }

  /* EVENTOS */
  @HostListener('mouseenter') mouseEntro() {
    this.conversionParaArgumentosVarios();
    this.methodResaltar(this.background, this.color, this.cursor);

    /* Los Metodos De Arriba Reemplazan Esto */
    // this.elementHTML.nativeElement.style.backgroundColor = '#000000';
    // this.elementHTML.nativeElement.style.color = 'yellow';
    // this.elementHTML.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.conversionParaArgumentosVarios();
    this.methodResaltar(null, this.background);

    // this.elementHTML.nativeElement.style.backgroundColor = null;
    // this.elementHTML.nativeElement.style.color = '#000000';
  }

  private methodResaltar(
    colorFondo: string,
    colorText: string,
    cursor?: string
  ) {
    this.elementHTML.nativeElement.style.backgroundColor = colorFondo;
    this.elementHTML.nativeElement.style.color = colorText;
    this.elementHTML.nativeElement.style.cursor = cursor;
  }
}
