import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../cliente.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  cliente: any;

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit() {
    this.cliente = this.clienteService.getClienteData();
  }

  volver() {
    this.router.navigate(['/consulta']);
  }
}
