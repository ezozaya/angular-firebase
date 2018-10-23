import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items:any;
  editarItem:any = {
    name:""
  }
  constructor(private conexion:ConexionService) { 
    this.conexion.listaItem().subscribe(item=>
      {this.items = item});
      console.log(this.items)
  }

  ngOnInit() {
  }
  eliminar(id:number){
    this.conexion.removeItem(id);
  }
  modificarItem(item){
    this.editarItem = item;
    console.log(this.editarItem);
  }

  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem);
  }

}
