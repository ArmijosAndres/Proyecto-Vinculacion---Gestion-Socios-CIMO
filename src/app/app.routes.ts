import { Routes } from '@angular/router';
import { ListadoSocios } from './socio/components/socio/listado-socios/listado-socios';
import { Pagos } from './socio/components/socio/pagos/pagos';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';
import { ReporteSocios } from './socio/components/reporte-socios/reporte-socios';
import { Conversion } from './socio/components/conversion/conversion';

//indica las rutas de navegación
export const routes: Routes = [
  {path: '', component: ListadoSocios},
  {path: 'socio', component: ListadoSocios},
  {path: 'pagos', component: Pagos},
  {path: 'reporte-mensualidades', component: ReporteMensualidades},
  {path: 'reporte-socios', component: ReporteSocios},
  {path: 'conversion', component: Conversion},
  {path: '**', redirectTo: ''}
];