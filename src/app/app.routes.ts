import { Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ResumenComponent } from './resumen/resumen.component';

export const routes: Routes = [
  { path: 'consulta', component: ConsultaComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '', redirectTo: '/consulta', pathMatch: 'full' }
];
