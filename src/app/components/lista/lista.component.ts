import { Component, OnInit, TemplateRef } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { ControlContainer } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  modalRef: BsModalRef;
  message: string;

  constructor(private conexion:ConexionService, private modalService: BsModalService) { 
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
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
  
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, item) {
    this.editarItem = item;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

}
