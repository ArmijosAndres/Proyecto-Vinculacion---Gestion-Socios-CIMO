import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './shared/components/encabezado/encabezado';
import { Menu } from './shared/components/menu/menu';
import { Pie } from './shared/components/pie/pie';
import { ListadoSocios } from './socio/components/socio/listado-socios/listado-socios';
import { ReporteMensualidades } from './socio/components/reporte-mensualidades/reporte-mensualidades';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Menu, Pie, ListadoSocios, ReporteMensualidades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'prueba3';
}