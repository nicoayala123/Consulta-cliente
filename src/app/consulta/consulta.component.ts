import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  primerNombre: string = '';
  primerApellido: string = '';

  constructor(private router: Router, private clienteService: ClienteService) {}

  isValid() {
    return this.tipoDocumento && this.numeroDocumento && this.primerNombre && this.primerApellido && /^\d{8,11}$/.test(this.numeroDocumento);
  }

  formatNumber() {
    this.numeroDocumento = this.numeroDocumento.replace(/\D/g, '');
    this.numeroDocumento = this.numeroDocumento.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  onSubmit() {
    if (this.isValid()) {
      this.clienteService.setClienteData({
        tipoDocumento: this.tipoDocumento,
        numeroDocumento: this.numeroDocumento,
        primerNombre: this.primerNombre,
        primerApellido: this.primerApellido
      });
      this.router.navigate(['/resumen']);
    }
  }
}
