import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { CovidComponent } from './components/covid/covid.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxDataTableModule } from 'angular-9-datatable';

//routes
import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DivisasComponent,
    NoticiasComponent,
    HoroscopoComponent,
    CovidComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    app_routing,
    HttpClientModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
