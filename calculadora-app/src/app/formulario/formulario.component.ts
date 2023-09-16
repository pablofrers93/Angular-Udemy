import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultado = new EventEmitter<number>();

  operandoAInput: number;
  operandoBInput: number;

  sumarOperandos(){
    let suma = this.operandoAInput+this.operandoBInput;
    this.resultado.emit(suma);
  }
}
