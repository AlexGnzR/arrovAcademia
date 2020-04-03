import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebhomeComponent } from './components/webhome/webhome.component';
import { HeaderwebComponent } from './components/headerweb/headerweb.component';
import { FooterwebComponent } from './components/footerweb/footerweb.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
@NgModule({
  declarations: [
    AppComponent,
    WebhomeComponent,
    HeaderwebComponent,
    FooterwebComponent,
    InicioComponent,
    CursosComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
