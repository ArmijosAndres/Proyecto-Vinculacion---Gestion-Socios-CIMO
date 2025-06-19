import { Component } from '@angular/core'
import { FormularioSocio } from '../formulario-socio/formulario-socio';
import { RouterModule } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-listado-socios',
  imports: [FormularioSocio, RouterModule],
  templateUrl: './listado-socios.html',
  styleUrl: './listado-socios.css'
})
export class ListadoSocios {

//especificar con : void de que no retorna valor
  agregar(): void
  {
    $("#modalformulariosocio").modal("show");
  }

}
