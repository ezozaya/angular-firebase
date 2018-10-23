import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipos:any[] = [
    {
      nombre: 'juan',
      edad:12,
      descripcion: "scdslkfcsdkojfklrjfjrklfj"
    },
    {
      nombre: 'PEDRO',
      edad:344,
      descripcion: "scdslkfcsdkojfklrjfjrklfj"
    },
    {
      nombre: 'Ema',
      edad:32,
      descripcion: "scdslkfcsdkojfklrjfjrklfj"
    }
  ]
  constructor() {
    console.log('funciona el servicio')
   }
   obtenerEquipo(){
     return this.equipos
   }
   obtenerUno(i){
    return this.equipos[i]
  }
}
