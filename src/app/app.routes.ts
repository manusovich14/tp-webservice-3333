import { RouterModule, Routes } from "@angular/router";

import { CovidComponent } from './components/covid/covid.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const app_routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: 'divisas', component: DivisasComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: 'covid', component: CovidComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'noticias' }
];

export const app_routing = RouterModule.forRoot(app_routes);