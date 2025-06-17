import { Routes } from '@angular/router';
import { ListadoSocios } from './socio/components/socio/listado-socios/listado-socios';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';

export const routes: Routes = [
  {path: '', component: ListadoSocios},
  {path: 'socio', component: ListadoSocios},
  {path: 'reportemensualidades', component: ReporteMensualidades},
  {path: '**', redirectTo: ''}
];

//indica las rutas de navegación