import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style/ng-style.component';
import { SoloComponent } from './components/css-solo-componente/solo/solo.component';
import { ClasesComponent } from './components/ng-class/clases/clases.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/* Directives */
import { ResaltadoDirective } from './directives/resaltado.directive';

/* Rutas */
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    SoloComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
