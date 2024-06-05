import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteData: any = null;

  setClienteData(data: any) {
    this.clienteData = data;
  }

  getClienteData() {
    return this.clienteData;
  }
}
